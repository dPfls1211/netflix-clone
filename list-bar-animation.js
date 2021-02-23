
var previous = document.getElementById('list-animation-bar__image-list__move-left'),
    next = document.getElementById('list-animation-bar__image-list__move-right'),
    imgleftbtn = document.getElementById('list-animation-bar__image-list__move-left');
var bar1 = document.getElementById('animation-list-bar1'),
    bar2 = document.getElementById('animation-list-bar2'),
    bar3 = document.getElementById('animation-list-bar3'),
    bar4 = document.getElementById('animation-list-bar4'),
    bar5 = document.getElementById('animation-list-bar5'),
    bar6 = document.getElementById('animation-list-bar6'),
    bar7 = document.getElementById('animation-list-bar7'),
    bar8 = document.getElementById('animation-list-bar8'),
    bar9 = document.getElementById('animation-list-bar9'),
    bar10 = document.getElementById('animation-list-bar10');

var id = 1;
var pointx = -630;
//visibility: hidden;
next.addEventListener('click', function (event) { //함수 추가 및.. html에서 click함수 로 사용..
    var moveimage = this.previousElementSibling; //next클릭시 그 클릭한 객체의 형제 객체중 클릭한 객체 다음에 있는 요소

    var leftbtn = this.previousElementSibling.previousElementSibling;
    leftbtn.style.visibility = 'visible';
    moveimage.style.transform = 'translateX(' + pointx + 'px)';
    pointx -= 630;
    // moveimage.style.setProperty(`${transform}`,-630`px`);
    moveimage.style.transition = 'transform 1s'; //'left 1s'
    console.log(moveimage.style.translate);
    // moveimage.animate({"translate":"-300px"});
    id += 1;
    if (id === 11)
        id = 1;
    barcolor(id);
});
previous.addEventListener('click', function (event) {
    var moveimage = this.nextElementSibling;
    pointx += 630;
    moveimage.style.transform = 'translateX(' + pointx + 'px)';
    moveimage.style.transition = 'transform 1s';
    id -= 1;
    if (id === 0) {
        id = 10;
    }
    barcolor(id);
});
function barcolor(id) {
    bar1.style.background = '#4d4d4d';
    bar2.style.background = '#4d4d4d';
    bar3.style.background = '#4d4d4d';
    bar4.style.background = '#4d4d4d';
    bar5.style.background = '#4d4d4d';
    bar6.style.background = '#4d4d4d';
    bar7.style.background = '#4d4d4d';
    bar8.style.background = '#4d4d4d';
    bar9.style.background = '#4d4d4d';
    bar10.style.background = '#4d4d4d';
    switch (id) {
        case 1:
            bar1.style.background = '#aaaaaa';
            break;
        case 2:
            bar2.style.background = '#aaaaaa';
            break;
        case 3:
            bar3.style.background = '#aaaaaa';
            break;
        case 4:
            bar4.style.background = '#aaaaaa';
            break;
        case 5:
            bar5.style.background = '#aaaaaa';
            break;
        case 6:
            bar6.style.background = '#aaaaaa';
            break;
        case 7:
            bar7.style.background = '#aaaaaa';
            break;
        case 8:
            bar8.style.background = '#aaaaaa';
            break;
        case 9:
            bar9.style.background = '#aaaaaa';
            break;
        case 10:
            bar10.style.background = '#aaaaaa';
            break;
    }
}
function init() {
    imgleftbtn.style.visibility = 'hidden';

}
init();


// 애니메이션 보여주고 위치 정상태(이미지 바꾸기)