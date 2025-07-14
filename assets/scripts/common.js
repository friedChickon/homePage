$(document).ready(function(){
    
    let st;

    // 새로고침 시 페이지 맨 위로 
    window.onload = function(){
        setTimeout(function(){
            scrollTo(0,0);
        },0);
    }

    // a 태그 제어 href=#

    function hrefHandle(){
        $('a').click(function(e){
            const href = $(this).attr('href');
            if(href == '#'){
                e.preventDefault();
            } 
        })
    }



    // 헤더 제어

    function headerHandle(){

        $('#header').mouseenter(function(){
            $('#header').addClass('on');
        })
        $('#header').mouseleave(function(){
                st = $(document).scrollTop();
                
                if(0 < st){
                    $('#header').addClass('on');
                } else {
                    $('#header').removeClass('on');
                }
        })
        
        // 헤더 스크롤탑 제어
        function headerScroll() {
            $(window).scroll(function () {
                const st = $(document).scrollTop();
                
                if(0 < st){
                    $('#header').addClass('on');
                    $('.btn_top').fadeIn(100);
                } else {
                    $('#header').removeClass('on');
                    $('.btn_top').fadeOut(100);
                }
            }); 
        }


        // 헤더 pc gnb 메뉴 제어 
        function pcGnbWrap(){
    
            $('#header .menu_pc .gnb_menu').mouseenter(function(){
                $('#header .gnb_menu').children('.gnb_tab').removeClass('on');
                $(this).children('.gnb_tab').addClass('on');
        
                $('.gnb_menu > .inner_menu li a.in').mouseenter(function(){
                    $('.gnb_menu > .inner_menu li a.in').not(this).next().hide();
                    $(this).next().show();
                })
                $('.gnb_menu > .inner_menu > li').mouseleave(function(){
                    $('.gnb_menu > .inner_menu li a.in').next().hide();
                })
        
            })
            $('#header .menu_pc .gnb_menu').mouseleave(function(){
                $('#header .gnb_menu').children('.gnb_tab').removeClass('on');
            })    
        }
        // 헤더 mobile gnb 메뉴 제어 
        function mobGnbWrap(){
    
            const mobGnbList = $('#header .menu_mob .gnb_mob .gnb_tab + ul');
            // const mobGnbInnerTitle = $('#header .menu_mob .gnb_mob .gnb_tab + ul li > a');
            // const mobGnbInnerMenu = $('#header .menu_mob .gnb_mob .gnb_tab + ul li > a + ul');


            $('#header .header_nav .btn_menu_mob').click(function(){
                $('.gnb_mob_wrap').fadeToggle(300);
                $('#header h1').toggleClass('mob_on');
            })
            $('.gnb_mob_wrap .gnb_bg').click(function(){
                $('.gnb_mob_wrap').fadeOut(300);
                $('#header h1').removeClass('mob_on');

            })


            $('#header .menu_mob .gnb_mob .gnb_tab').click(function(){
                $(this).next().stop().slideToggle();
                mobGnbList.not($(this).next()).stop().slideUp();
                // mobGnbInnerMenu.not($(this).next()).slideUp();

            })

            // mobGnbInnerTitle.click(function(){
            //     $(this).next().slideToggle();
            //     mobGnbInnerMenu.not($(this).next()).slideUp();
            // })

            // mobile lang btn handle 모바일 언어버튼 제어
            const mobLangBtn = $('#header .header_nav .gnb_mob_wrap .utile_wrap .btn_lang_mob');
            mobLangBtn.click(function(){
                mobLangBtn.next().toggle();
            })
        }

        pcGnbWrap();
        mobGnbWrap();
        headerScroll();
    }

    // 메인 섹션 탑 스크롤 제어 
    function mainScrollHandle(){
        $('.btn_index_scroll').click(function(){
            const height = $(window).height() - $('#header').height();
            $('html, body').animate({
                scrollTop : height
            },500)
        })
    }

    // 탑버튼 제어
    function btnTopHandle(){
        $(document).scroll(function(){
            st = $(document).scrollTop() + $(window).height();
            const footerHeight = $('#footer').offset().top;
            
            if(footerHeight < st){
                $('.btn_top').addClass('foot');
            } else {
                $('.btn_top').removeClass('foot');
            }
        })
        $('.btn_top').click(function(){
            $('html, body').animate({
                scrollTop : 0
            },'linear');

        })
    }
    // 컨택트 제어
    function btnContactHandle(){
        $('.gnb_contact').click(function(){
            st = $(document).height() - $(window).height();
            console.log(st);
            $('html, body').animate({
                scrollTop : st
            },'linear');

        })
    }


    // popup 팝업 제어

    function popupHandle(){
        $('#popupOpen').click(function(){
            $('.popup_wrap').fadeIn();
        })
        $('.btn_popup-close').click(function(){
            $('.popup_wrap').fadeOut();
        })
        $('#popupBg').click(function(){
            $('.popup_wrap').fadeOut();
        })
    }


    function init(){
        hrefHandle();
        headerHandle();
        mainScrollHandle();
        btnTopHandle();
        btnContactHandle();
        popupHandle();
    }
    
    init();

})