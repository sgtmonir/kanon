(function ($) {

    "use strict";

    $(document).ready(function () {
		$('#year').text(new Date().getFullYear());
        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();



        // dropdown menu

        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });


        //Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').on('click', function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });

        }


        /*Video Magnific Popup */
        if ($.fn.magnificPopup) {
            $('.video-link').magnificPopup({
                type: 'video',
            });
        }


        /* Fact Counter + Text Count */
        if ($('.success-box').length) {
            $('.success-box').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }


        //Dashed on How It's Work
        if ($('.dashed').length) {
            $('.dashed').parent().css('position', 'initial');
        }
        
        
        //Single Item Carousel
        if ($('.user-say-content').length) {
            $('.user-say-content').slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                pauseOnHover: false,
                autoplaySpeed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.user-say-img',
            });
        }



        /*Three item Slider */
        if ($('.user-say-img').length) {
            $('.user-say-img').slick({
                infinite: true,
                autoplay: false,
                arrows: true,
                prevArrow: '<button class="user-prev"><i class="flaticon-left-arrow"></i></button>',
                nextArrow: '<button class="user-next"><i class="flaticon-next"></i></button>',
                cssEase: 'linear',
                pauseOnHover: false,
                autoplaySpeed: 2000,
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.user-say-content',
                centerMode: true,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }


        /*Three item Slider */
        if ($('.three-item-carousel').length) {
            $('.three-item-carousel').slick({
                infinite: true,
                autoplay: 5000,
                arrows: true,
                prevArrow: '<button class="service-prev"><i class="flaticon-left-arrow"></i></button>',
                nextArrow: '<button class="service-next"><i class="flaticon-next"></i></button>',
                pauseOnHover: false,
                autoplaySpeed: 2000,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }



        /*Three item Slider */
        if ($('.three-item-news-carousel').length) {
            $('.three-item-news-carousel').slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: true,
                pauseOnHover: false,
                autoplaySpeed: 2000,
                slidesToShow: 3,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }



        //Four Item Carousel
        if ($('.four-item-carousel').length) {
            $('.four-item-carousel').slick({
                infinite: true,
                autoplay: true,
                arrows: true,
                prevArrow: '<button class="team-prev"><i class="flaticon-left-arrow"></i></button>',
                nextArrow: '<button class="team-next"><i class="flaticon-next"></i></button>',
                pauseOnHover: false,
                autoplaySpeed: 2000,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }


        // Blog Load More Ajax
        if($('.blog-load').length){
            $('.blog-load').simpleLoadMore({
              item: '.latest-news-box',
              count: 9,
              itemsToLoad: 3,
              btnHTML: '<div class="blog-btn text-center w-100 mt-25 mb-30"><a href="blog.html" class="theme-btn br-30">Show More</a></div>'
            });
        }


        // Scroll to a Specific Div
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }


        // Number Input Minus on Click
        $(".minus").on('click', function () {
            this.parentNode.querySelector('input[type=number]').stepDown();
        });

        // Number Input Plus on Click
        $(".plus").on('click', function () {
            this.parentNode.querySelector('input[type=number]').stepUp();
        });

        
        
        //  Price Totaling Function
        function priceTotaling() {
            var quantity = $(this).parent().find('input[type=number]').val();
            var price = $(this).parent().parent().find('.product-price').text();
            $(this).parent().parent().find('.product-total-price').text(quantity*price);
            
            var subTotal = 0;
            
            $('.product-total-price').each(function(){
                
                var singleVal = $(this).text();
                if($.isNumeric(singleVal)){
                    subTotal += parseFloat(singleVal);
                }
                
            });
            
            $('.sub-total .price').text(subTotal);
            
            var shipping = $('.shipping .price').text();
            var discount = $('.discount .price').text();
            
            $('.total .price').text((+subTotal) + (+shipping) - discount);

        }

        //  Cart Single Item box removed with Animation and Price Totaling
        $(".cart-single-item .close").on('click', function(){
            $(this).parent().fadeOut(500, function(){
                $(this).remove();
                priceTotaling();
            });
        });
        
        //  Price Totaling when product quantity increment or decrement
        $(".number-input button").on('click', priceTotaling);
        
        //  Price Totaling when input in product quantity number in input field
        $(".number-input").on('input', '.quantity', priceTotaling);

        
        
        // Rating Star Selection
        $('#your-rating > i').each(function() {
            var list = $(this).parent(),
                listItems = list.children(),
                itemIndex = $(this).index();

            $(this).on('hover', function() {
                for (var i = 0; i < listItems.length; i++) {
                    if (i <= itemIndex) {
                        $(listItems[i]).addClass('hovered');
                    } else {
                        break;
                    }
                }
                $(this).on('click', function() {
                    for (var i = 0; i < listItems.length; i++) {
                        if (i <= itemIndex) {
                            $(listItems[i]).addClass('selected');
                        } else {
                            $(listItems[i]).removeClass('selected');
                        }
                    }
                });
            }, function() {
                listItems.removeClass('hovered');
            });
        });

   
        
        // main-header background color chnage whene click on navbar-toggle
        $(".navbar-toggle").on('click', function () {
            $('.main-header').toggleClass('bg-black');
        });


        /* Coming Soon CountDown Start */
		if($('.coming-inner').length !== 0){
                const second = 1000,
				  minute = second * 60,
				  hour = minute * 60,
				  day = hour * 24;
				let	countDown = new Date('Mar 31, 2020 00:00:00').getTime(),
			x = setInterval(function() {
			  let now = new Date().getTime(),
				  distance = countDown - now;
				document.getElementById('days').innerText = Math.floor(distance / (day)),
				document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
				document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
				document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
			  //do something later when date is reached
			  //if (distance < 0) {
			  //  clearInterval(x);
			  //  'IT'S MY BIRTHDAY!;
			  //}
			}, second)
        };
        
        
        //  Jquery Magnify
        if($('.product-preview-wrap').length){
            $('.product-preview-wrap .tab-pane img').magnify();
        }
        
        // jQuery Nice Select
        $('select').niceSelect();


        // Elements Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }


    });

    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();


        // main-header background color remove whene window resize
        if ($(window).innerWidth() >= mobileWidth) {
            $('.main-header').removeClass('bg-black');
        }

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        //Hide Loading Box (Preloader)
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
    });



})(window.jQuery);
