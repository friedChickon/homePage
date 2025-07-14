$(document).ready(function() {
    function accountMenu() {
        const menu = $('#account .sec_nav .service_menu');
        const menuBtn = $('#account .sec_nav .service_menu li');
        const menuSection = $('#account .sec_serv');
        
        let i = 0;

        $(document).scroll(function() {
            let st = $(document).scrollTop() + $('#header').height();
            let sb = $(document).scrollTop() + $(window).height();

            let scrollHead = $('#main .sec_top').height() + $('#header').height();
            let scrollFoot = $('#footer').offset().top;

            function menuPosition() {
                // 상단 위치 fixed
                if (st >= scrollHead) {
                    menu.addClass('fixed');
                } else {
                    menu.removeClass('fixed');
                }
    
                // 하단 위치 foot 
                if (sb >= scrollFoot) {
                    menu.addClass('foot');
                } else {
                    menu.removeClass('foot');
                }
            }

            let secTop = Math.round(menuSection.eq(i).offset().top) - Math.round($('#header').height()) - Math.round(menuBtn.eq(i).position().top) - Math.round(menuSection.eq(i).find('.title_wrap').height() + 20);

            if (st > secTop) {
                menuBtn.removeClass('active');
                menuBtn.eq(i).addClass('active');
                i++;
                if (i > 4) {
                    i = 4;
                }
            } else {
                i--;
                if (i < 0) {
                    i = 0;
                    menuBtn.removeClass('active');
                    menuBtn.eq(i).addClass('active');
                }
            }

            menuPosition();
        })

        menuBtn.click(function() {
            let i = $(this).index();
            let secTop = Math.round(menuSection.eq(i).offset().top) - Math.round($('#header').height()) - Math.round(menuBtn.eq(i).position().top) - Math.round(menuSection.eq(i).find('.title_wrap').height() + 20);

            $('html, body').animate({
                scrollTop : secTop
            },'fast', 'linear');
        })
    }

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        }, 
        // navigation: {
        //     nextEl: '.swiper-button-prev'
        // },
        // breakpoints: {
        //   1025: {
        //     centeredSlides: false,
        //   }
        // }
    });


    function init() {
        accountMenu();
    }
    
    init();
})