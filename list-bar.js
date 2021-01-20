// var test = document.createElement('div');
// var span = document.createElement('span');
// var text = document.createTextNode('test');
// span.appendChild(text);
// test.appendChild(span);
// document.body.appendChild(test);

//전체 틀
var _listBar = document.createElement('div'); //.list-bar
//상단 글..
var _listBar__title = document.createElement('div'); //.list-bar__title
//상단왼쪽
var _listbar__title__content = document.createElement('span'); //종류. 애니메이션, 영화.. etc. .list-bar__title__content
var _listbar__title__content_allShow = document.createElement('span'); //모두보기 > 
var _listbar__title__content_allShow_icon = document.createElement('i'); //class=fas fa-angle-right
//상단 오른쪽 기본적으론 10개 있음
var _listBar__title__list = document.createElement('div');
var _listbar__title__list_selector = document.createElement('span'); //넘긴.. 몇번째인지 - - -로 표시하는거
//id= list-bar1~~ class = list-bar__title__list-bar

//하단에 그림들
var _listBar__image_list = document.createElement('div'); //.list-bar__imgae-list
//왼쪽 화살표..
var _listbar__image_list__move_left = document.createElement('div'); //id="list-bar__image-list__move-left" class="list-bar__image-list__move"
var _listbar__image_list__move_left_icon =document.createElement('i'); //fas fa-angle-left fa-3x
//중간 이미지 기본 4개. 화면 크기에 따라 개수 달라짐.. 이거랑 _listbar__title__list_selector개수 연관.
var _listBar__image_list__images = document.createElement('div'); //list-animation-bar__image-list__images클래스의 div추가.
var _listBar__image_list_image = document.createElement('div');
//오른쪽 화살표
var _listbar__image_list__move_right = document.createElement('div'); //id="list-bar__image-list__move-right" class="list-bar__image-list__move"
var _listbar__image_list__move_right_icon =document.createElement('i'); //fas fa-angle-right fa-3x


function AddClass(){
    _listBar.className = 'list-bar';
    _listBar__title.className = 'list-bar__title';
    
    var content = document.createTextNode('영화');
    _listbar__title__content.appendChild(content);
    _listbar__title__content.className = 'list-bar__title__content';
    _listbar__title__content_allShow_icon.className='fas fa-angle-right';

    _listBar__title__list.className='list-bar__title__list';
    _listbar__title__list_selector.className="list-bar__title__list-bar";
    _listbar__title__list_selector.id='list-bar1';

    _listBar__image_list.className='list-bar__image_list';
    _listbar__image_list__move_left.className = 'list-animation-bar__image-list__move';
    _listbar__image_list__move_right.className = 'list-animation-bar__image-list__move';
    _listbar__image_list__move_left.id='list-animation-bar__image-list__move-left';
    _listbar__image_list__move_right.id='list-animation-bar__image-list__move-right';
    _listbar__image_list__move_left_icon.className='fas fa-angle-left fa-3x';
    _listbar__image_list__move_right_icon.className='fas fa-angle-right fa-3x';
    //위 아이콘 대신 <로 직접 집어넣기도 한 방법 같음..ㅎㅁㅎ

    _listBar__image_list__images.className = 'list-animation-bar__image-list__images';
    _listBar__image_list_image.className='list-animation-bar__image-list__image'
    
}

function create(){
    _listbar__image_list__move_right.appendChild(_listbar__image_list__move_right_icon);
    _listbar__image_list__move_left.appendChild(_listbar__image_list__move_left_icon);
    _listBar__image_list.appendChild(_listbar__image_list__move_left);
    _listBar__image_list__images.appendChild(_listBar__image_list_image);
    _listBar__image_list.appendChild(_listBar__image_list__images);
    _listBar__image_list.appendChild(_listbar__image_list__move_right);
    //하단 이미지 일단.. 추가시켜둠..
    _listBar__title__list.appendChild(_listbar__title__list_selector);
    _listbar__title__content_allShow.appendChild(_listbar__title__content_allShow_icon);
    _listbar__title__content.appendChild(_listbar__title__content_allShow);
    _listBar__title.appendChild(_listbar__title__content);
    _listBar__title.appendChild(_listBar__image_list);

    _listBar.appendChild(_listBar__title);
    _listBar.appendChild(_listBar__image_list);
    document.body.appendChild(_listBar);
}

function init(){
    AddClass();
    create();
}

// init();