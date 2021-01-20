const pinTitle = document.getElementById("pin-header-bar_fixed");

function _Handlescroll(){
    // $(window).scroll(function(){
    //     if($(this).scrollTop()>0){
    //        pinTitle.addClass('animateIn');
    //     }else{
    //        pinTitle.removeClass('animateIn');
    //     }
    // });
    document.addEventListener('scroll',function(event){
        if(document.documentElement.scrollTop>0){
            pinTitle.classList.add("animateIn");
            pinTitle.classList.remove("pin-header-bar");
        }
        else{
            pinTitle.classList.remove("animateIn");
            pinTitle.classList.add("pin-header-bar");
        }
    });
}

function init(){
    _Handlescroll();
    pinTitle.addEventListener("scroll",_Handlescroll);
}
init();