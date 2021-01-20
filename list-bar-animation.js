
const previous = document.getElementById('list-animation-bar__image-list__move-left'),
next = document.getElementById('list-animation-bar__image-list__move-right'),
imgleftbtn = document.getElementById('list-animation-bar__image-list__move-left');

var pointx = -630;
//visibility: hidden;
next.addEventListener('click',function(event){  
    var moveimage = this.previousElementSibling; //next클릭시 그 클릭한 객체의 형제 객체중 클릭한 객체 다음에 있는 요소
    
    var leftbtn = this.previousElementSibling.previousElementSibling;
    leftbtn.style.visibility = 'visible';
    moveimage.style.transform = 'translateX('+pointx+'px)';
    pointx-=600;
    // moveimage.style.setProperty(`${transform}`,-630`px`);
    moveimage.style.transition = 'transform 1s';
    console.log(moveimage.style.translate);
    // moveimage.animate({"translate":"-300px"});
});
previous.addEventListener('click',function(event){
    var moveimage = this.nextElementSibling;
    pointx+=600;
    moveimage.style.transform = 'translateX('+pointx+'px)';
    moveimage.style.transition = 'transform 1s';
});
function init(){
    imgleftbtn.style.visibility='hidden';
    
}
init();

//추가.. 위에 span-bar바꾸게 if>0 이면 맨첨으로 돌아가게..
// 애니메이션 보여주고 위치 정상태(이미지 바꾸기)