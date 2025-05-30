(function ($) {
  "use strict";
  var windowOn = $(window);


    /*-----------------------------------------------------------------------------------

        Template Name: Printing Service & Printing Template
        Author: RRDevs
        Support: https://support.rrdevs.net
        Description: Printing Service & Printing Template.
        Version: 1.0
        Developer: Soukhin khan (https://github.com/Soukhinkhan)

    -----------------------------------------------------------------------------------

      /*======================================
        Preloader activation
        ========================================*/


        function handleQuantityButtons() {
            // Handle the minus button click
            $('.quantity__group .minus').click(function() {
                var input = $(this).closest('.quantity__group').find('input.qty');
                var currentValue = parseInt(input.val());
                if (currentValue > 1) {
                    input.val(currentValue - 1).change();
                }
            });
    
            // Handle the plus button click
            $('.quantity__group .plus').click(function() {
                var input = $(this).closest('.quantity__group').find('input.qty');
                var currentValue = parseInt(input.val());
                input.val(currentValue + 1).change();
            });
        }
    
        handleQuantityButtons();
    
        $(document.body).on('updated_cart_totals', function() {
            handleQuantityButtons();
        });


        function resourcesHubMasonry() {
            var $grid = $('.resources-hub__masonry');
            $grid.masonry({
              itemSelector: '.col-item',
              columnWidth: '.col-lg-4',
              horizontalOrder: false,
              isAnimated: true,
              // percentPosition: true,
            });
        
            $grid.masonry('reloadItems');
            $grid.masonry('layout');
        
            // layout Masonry after each image loads
            $grid.imagesLoaded().progress(function () {
              $grid.masonry('layout');
            });
          }
        
          resourcesHubMasonry();


	$(window).on('load', function (event) {
		$('#preloader').delay(1000).fadeOut(500);
	});


    $(".preloader-close").on("click", function () {
        $('#preloader').delay(0).fadeOut(500);
    })

    /*======================================
   Data Css js
   ========================================*/
    $("[data-background]").each(function() {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function() {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

  /*======================================
	Mobile Menu Js
	========================================*/
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    meanExpand: ['<i class="fa-regular fa-angle-right"></i>'],
  });

  /*======================================
	Sidebar Toggle
	========================================*/
  $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
    $(".offcanvas__area").removeClass("info-open");
    $(".offcanvas__overlay").removeClass("overlay-open");
  });
  // Scroll to bottom then close navbar
  $(window).scroll(function(){
    if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
        $(".offcanvas__area").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    }
  });
  $(".sidebar__toggle").on("click", function () {
    $(".offcanvas__area").addClass("info-open");
    $(".offcanvas__overlay").addClass("overlay-open");
  });

  /*======================================
	Body overlay Js
	========================================*/
  $(".body-overlay").on("click", function () {
    $(".offcanvas__area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  /*======================================
	Sticky Header Js
	========================================*/

  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $("#header-sticky").addClass("rs-sticky");
    } else {
      $("#header-sticky").removeClass("rs-sticky");
    }
  });

    /*** pricing table */
    const pricingMonthlyBtn = $("#monthly-btn"),
        pricingYearlyBtn = $("#yearly-btn"),
        pricingValues = $(".pricing-card-price h2");

    if (pricingMonthlyBtn[0] && pricingYearlyBtn[0] && pricingValues.length > 0) {
        pricingMonthlyBtn[0].addEventListener("click", function () {
            updatePricingValues("monthly");
            pricingYearlyBtn[0].classList.remove("active");
            pricingMonthlyBtn[0].classList.add("active");
        });

        pricingYearlyBtn[0].addEventListener("click", function () {
            updatePricingValues("yearly");
            pricingMonthlyBtn[0].classList.remove("active");
            pricingYearlyBtn[0].classList.add("active");
        });
    }

    function updatePricingValues(option) {
        pricingValues.each(function () {
            const pricingValue = $(this);
            const yearlyValue = pricingValue.attr("data-yearly");
            const monthlyValue = pricingValue.attr("data-monthly");

            const newValue = option === "monthly" ? monthlyValue : yearlyValue;
            pricingValue.html(newValue);
        });
    }

  /*======================================
	MagnificPopup image view
	========================================*/
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /*======================================
	MagnificPopup video view
	========================================*/
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /*======================================
	Counter Js
	========================================*/

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /*======================================
	Wow Js
	========================================*/
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

  /*======================================
	Button scroll up js
	========================================*/
  
    var progressPath = document.querySelector(".backtotop-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".backtotop-wrap").addClass("active-progress");
        } else {
            jQuery(".backtotop-wrap").removeClass("active-progress");
        }
    });
    jQuery(".backtotop-wrap").on("click", function(event) {
        event.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, duration);
        return false;
    });
    
    /*======================================
	One Page Scroll Js
	========================================*/
    /*** Scroll Nav */
    var link = $('#mobile-menu ul li a, .mean-nav ul li a');

    link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 76
        }, 600);
        $(this).parent().addClass('active');
        e.preventDefault();
    });

    $(window).on('scroll', function(){
        scrNav();
    });

    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function() {
            var id = $(this).attr('id'),
                offset = $(this).offset().top-1,
                height = $(this).height();
            if(sTop >= offset && sTop < offset + height) {
                link.parent().removeClass('active');
                $('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
            }
        });
    }
    scrNav();

    /*======================================
	Smoth animatio Js
	========================================*/
    $(document).on('click', '.smoth-animation', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 300);
    });

  /*======================================
  Parallax Swiper
  ========================================*/
    var parallaxSlider;
    var parallaxSliderOptions = {
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        parallax: true,
        loop: true,
    
        pagination: {
            el: ".rs-slider-dot",
            clickable: true,
        },
    
        navigation: {
            nextEl: ".slider__button-prev",
            prevEl: ".slider__button-next",
        },
        on: {
            init: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".slider__thumb-bg")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.width,
                        });
                }
            },
            resize: function() {
                this.update();
            },
        },
    };
    parallaxSlider = new Swiper(
        ".slider-prlx .parallax-slider",
        parallaxSliderOptions
    );

    /*brand__active***/
    var brand = new Swiper(".brand__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        clickable: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*feedback__active***/
    var feedback = new Swiper(".feedback__active", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1199: {
                slidesPerView: 3,
            },
            675: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*feedback__active-2***/
    var feedbacktwo = new Swiper(".feedback__active-2", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            prevEl: ".feedback-2__slider-button-prev",
            nextEl: ".feedback-2__slider-button-next",
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*======================================
      feedback__active-3 js
      ========================================*/
    var feedbackThree = new Swiper(".feedback__active-3", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".rs-swiper-dot",
            clickable: true,
        }
    });

    $(".count").counterUp({
        time:1000,
    })


    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: 1
        }
      })

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            prevEl: ".blog__slider-button-prev",
            nextEl: ".blog__slider-button-next",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            1201: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
      });

      var swiper = new Swiper(".card-slide", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            prevEl: ".team__slider-button-prev",
            nextEl: ".team__slider-button-next",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
      });

      $('.col-custom').on("click", function () {
		$('#features-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});


    // Testimonial Carousel
    var testimonialThumb = new Swiper(".thumb-carousel", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: true,
        speed: 600,
    });

    var testimonials = new Swiper(".content-carousel", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: true,
        speed: 600,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        },
        thumbs: {
            swiper: testimonialThumb,
        },
    });

    const instagramwiper = new Swiper('.rr-instagram-2-active', {
        // Optional parameters
        loop: true,
        slidesPerView: 5,
        autoplay: true,
        spaceBetween: 0,
        breakpoints: {
            '1400': {
                slidesPerView: 5,
            },
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },

            a11y: false,
        },
        navigation: {
            prevEl: '.slider-prev',
            nextEl: '.slider-next',
        },
    });

    // Popup Search Box
    $(function () {
        $("#popup-search-box").removeClass("toggled");

        $(".dl-search-icon").on("click", function (e) {
            e.stopPropagation();
            $("#popup-search-box").toggleClass("toggled");
            $("#popup-search").focus();
        });

        $("#popup-search-box input").on("click", function (e) {
            e.stopPropagation();
        });

        $("#popup-search-box, body").on("click", function () {
            $("#popup-search-box").removeClass("toggled");
        });
    });

    var bannerSlider;
    var bannerSliderOptions = {
        speed: 2000,
        autoplay: {
            delay: 5000,
        },
        parallax: true,
        loop: true,
        // effect: 'fade',

        navigation: {
            nextEl: ".banner__button-prev",
            prevEl: ".banner__button-next",
        },
        on: {
            init: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".banner__thumb-bg")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.width,
                        });
                }
            },
            resize: function() {
                this.update();
            },
        },
    };
    bannerSlider = new Swiper(
        ".banner_parallax-slider",
        bannerSliderOptions
    );

    $('.lan-select select, .nice-select-select select').niceSelect();

    $('#getting-started').countdown('2025/01/01', function(event) {
        $(this).html(event.strftime(' <div><span>%D</span></div>  <div><span>%H</span></div> <div><span>%M</span></div> <div><span>%S</span></div>'));
      });

      $('.slick.marquee').slick({
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        slidesToShow: 1,
        draggable:false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,

        breakpoints: {
            1200: {
                slidesPerView: 6,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
        },
      });

      $('.slick.marquee_rtl').slick({
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        draggable:false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        rtl:true
      });

      /*** lastNobullet */
    function lastNobullet() {
        var lastElement = false;
        $(".footer__copyright-menu ul li, .last_item_not_horizental_bar .col-lg-4").each(function() {
            if (lastElement && lastElement.offset().top != $(this).offset().top) {
                $(lastElement).addClass("no_bullet");
            } else {
                $(lastElement).removeClass("no_bullet");
            }
            lastElement = $(this);
        }).last().addClass("no_bullet");
    };
    lastNobullet();

    $(window).resize(function(){
        lastNobullet();
    });

    $('#contact-us__form').submit(function(event) {
        event.preventDefault();
        var form = $(this);
        $('.loading-form').show();

        setTimeout(function() { 
            $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize()
            }).done(function(data) {
                $('.loading-form').hide();
                $('.contact-us__form').append('<p class="success-message mt-3 mb-0">Your message has been sent successfully.</p>');
            }).fail(function(data) {
                $('.loading-form').hide();
                $('.contact-us__form').append('<p class="error-message mt-3 mb-0">Something went wrong. Please try again later.</p>');

            });
        }, 1000);
      });

    $('#showlogin').on('click', function () {
        $('#checkout-login').slideToggle(400);
    });
    $('#showcoupon').on('click', function () {
        $('#checkout_coupon').slideToggle(400);
    });

})(jQuery);

/*** pricing table */
const pricingMonthlyBtn = $("#monthly-btn"),
pricingYearlyBtn = $("#yearly-btn"),
pricingValues = $(".pricing-card-price h2");

if (pricingMonthlyBtn[0] && pricingYearlyBtn[0] && pricingValues.length > 0) {
pricingMonthlyBtn[0].addEventListener("click", function () {
    updatePricingValues("monthly");
    pricingYearlyBtn[0].classList.remove("active");
    pricingMonthlyBtn[0].classList.add("active");
});

pricingYearlyBtn[0].addEventListener("click", function () {
    updatePricingValues("yearly");
    pricingMonthlyBtn[0].classList.remove("active");
    pricingYearlyBtn[0].classList.add("active");
});
}

function updatePricingValues(option) {
pricingValues.each(function () {
    const pricingValue = $(this);
    const yearlyValue = pricingValue.attr("data-yearly");
    const monthlyValue = pricingValue.attr("data-monthly");

    const newValue = option === "monthly" ? monthlyValue : yearlyValue;
    pricingValue.html(newValue);
});
}


// testimonial-up-slider
// freeMode: true,