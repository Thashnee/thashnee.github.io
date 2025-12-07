console.log("Script loaded successfully");
var posX;
var posY;

$(".container").mousemove(function (e) {
    // console.log("Mouse moved: ", e.pageX, e.pageY);
    posX = e.pageX - 50;
    posY = e.pageY - 50;
  });
  
var currCircle = null;

$(".container").click(function() {
//   console.log("Mouse clicked at: ", posX, posY);
  currCircle = $(".container").append(
    "<div class='circle' style='left:" + posX + "px;top:" + posY + "px;'></div>"
  );

  setTimeout(function() {
    $("div").remove(currCircle);
    // Navigate to another page
    window.location.href = "../Dash/index_dash.html";
  }, 200);
  
 
});
