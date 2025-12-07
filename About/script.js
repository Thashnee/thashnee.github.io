var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);


 //  TweenMax.set('.mask',{z: 90, y: 0})
 window.addEventListener('wheel', function (e) {
    e.preventDefault();

    const crawl = document.querySelector('.crawl');
    const scrollVector = e.deltaY; // Detects scroll direction

    if (scrollVector > 0) {
        crawl.style.transform = 'translateZ(-2600px) translateY(-2600px)';
    } else {
        crawl.style.transform = 'translateZ(2600px) translateY(2600px)';
    }
}, { passive: false }); // Ensures smooth scrolling control