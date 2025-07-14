$(document).ready(function(){
    

    function forestStep(){
        $(document).scroll(function(){

            let st = $(document).scrollTop() + $('#header').height();

            scrollHead = $('#main .sec_top').height() + $('#header').height();
            scrollFoot = $('#footer').offset().top;

            for(let i = 0; i < 4; i++){
                const secTop = Math.round($('.sec_serv').eq(i).offset().top - 150);
                if (secTop < st){
                    $('.sec_serv').eq(i).addClass('on');
                } else {
                    $('.sec_serv').eq(i).removeClass('on');
                }
            }
        })

    }
    function init(){
        forestStep();
    }
    
    init();

})