"use strict";

(function ($) {
  "use strict";
  /*------------------------------------------------------------------
  [Table of contents]
  FUGO STICKY MENU JS INIT
  FUGO COUNTER JS INIT
  FUGO TEXT SLIDER
  FUGO TEXT SLIDER 2
  FUGO CLIENT SLIDER
  FUGO CLIENT SLIDER 2
  FUGO TESTIMONIAL SLIDER
  FUGO TESTIMONIAL SLIDER 2
  FUGO PRICING TABLE JS INIT
  FUGO SCROLL EFFECT TWO JS INIT 01
  FUGO SCROLL EFFECT TWO JS INIT 02
  FUGO MAGNIFIC POPUP JS INIT
  FUGO GALLERY MASONAY FILTER JS 01
  FUGO GALLERY MASONAY FILTER JS 02
  FUGO GALLERY MASONAY FILTER JS 03
  FUGO MAP JS
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/

  /* is_exist() */

  jQuery.fn.is_exist = function () {
    return this.length;
  };

  $(function () {
    /*--------------------------------------------------------------
    FUGO STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });
    /*--------------------------------------------------------------
    FUGO COUNTER JS INIT
    --------------------------------------------------------------*/

    var fugo_counter = $('#fugo-counter');

    if (fugo_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(fugo_counter).offset().top - window.innerHeight;

        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.fugo-counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }
    /*--------------------------------------------------------------
    FUGO TEXT SLIDER
    --------------------------------------------------------------*/


    var fugo_text_slider = $('.fugo-text-slider1');

    if (fugo_text_slider.is_exist()) {
      fugo_text_slider.slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    }
    /*--------------------------------------------------------------
    FUGO TEXT SLIDER 2
    --------------------------------------------------------------*/


    var fugo_text_slider2 = $('.fugo-text-slider2');

    if (fugo_text_slider2.is_exist()) {
      fugo_text_slider2.slick({
        rtl: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    }
    /*--------------------------------------------------------------
    FUGO CLIENT SLIDER
    --------------------------------------------------------------*/


    var fugo_client_slider = $('.fugo-client-slider');

    if (fugo_client_slider.is_exist()) {
      fugo_client_slider.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    }
    /*--------------------------------------------------------------
    FUGO CLIENT SLIDER 2
    --------------------------------------------------------------*/


    var fugo_client_slider2 = $('.fugo-client-slider2');

    if (fugo_client_slider2.is_exist()) {
      fugo_client_slider2.slick({
        rows: 2,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    }
    /*--------------------------------------------------------------
    FUGO TESTIMONIAL SLIDER
    --------------------------------------------------------------*/


    var fugo_testimonial_slider = $('.fugo-testimonial-slider');

    if (fugo_testimonial_slider.is_exist()) {
      fugo_testimonial_slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }
    /*--------------------------------------------------------------
    FUGO TESTIMONIAL SLIDER 2
    --------------------------------------------------------------*/


    var fugo_testimonial_slider2 = $('.fugo-testimonial-slider2');

    if (fugo_testimonial_slider2.is_exist()) {
      fugo_testimonial_slider2.slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }
    /*--------------------------------------------------------------
    FUGO PRICING TABLE JS INIT
    ------------------------------------------------------------*/
    // Table BTN Trigger


    $("#l5-pricing-btn .toggle-btn").on("click", function (e) {
      console.log($(e.target).parent().parent().hasClass("monthly-active"));
      $(e.target).toggleClass("clicked");

      if ($(e.target).parent().parent().hasClass("monthly-active")) {
        $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
      } else {
        $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
      }
    });
    $("[data-pricing-trigger]").on("click", function (e) {
      $(e.target).addClass("active").siblings().removeClass("active");
      var target = $(e.target).attr("data-target");
      console.log($(target).attr("data-value-active") == "monthly");

      if ($(target).attr("data-value-active") == "monthly") {
        $(target).attr("data-value-active", "yearly");
      } else {
        $(target).attr("data-value-active", "monthly");
      }
    });
    /*--------------------------------------------------------------
    FUGO SCROLL EFFECT TWO JS INIT 01
    ------------------------------------------------------------*/

    var $rotateTwo = $('#rotatetwo');
    var $win = $(window);
    $win.on('scroll', function () {
      var right = 16 - $win.scrollTop() * 0.01;
      $rotateTwo.css('transform', 'rotate(' + right + 'deg)');
    });
    /*--------------------------------------------------------------
    FUGO SCROLL EFFECT TWO JS INIT 02
    ------------------------------------------------------------*/

    var $rotateThree = $('#rotatethree');
    var $win = $(window);
    $win.on('scroll', function () {
      var right = 41 - $win.scrollTop() * 0.01;
      $rotateThree.css('transform', 'rotate(' + right + 'deg)');
    });
    /*--------------------------------------------------------------
    FUGO MAGNIFIC POPUP JS INIT
    ------------------------------------------------------------*/

    var popup_youtube = $('.fugo-popup');

    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }
  });
  /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {
    /*--------------------------------------------------------------
    FUGO GALLERY MASONAY FILTER JS 01
    ------------------------------------------------------------*/
    var fugo_gallery_masonay1 = $('#fugo-gallery-masonay1');

    if (fugo_gallery_masonay1.is_exist()) {
      var $container = $(fugo_gallery_masonay1),
          colWidth = function colWidth() {
        var w = $container.width(),
            columnNum = 1,
            columnWidth = 0;

        if (w > 1200) {
          columnNum = 4;
        } else if (w > 900) {
          columnNum = 3;
        } else if (w > 600) {
          columnNum = 2;
        } else if (w > 450) {
          columnNum = 2;
        } else if (w > 385) {
          columnNum = 1;
        }

        columnWidth = Math.floor(w / columnNum);
        $container.find('.fugo-grid-item').each(function () {
          var $item = $(this),
              multiplier_w = $item.attr('class').match(/fugo-grid-item-w(\d)/),
              multiplier_h = $item.attr('class').match(/fugo-grid-item-h(\d)/),
              width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
              height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
          $item.css({
            width: width // height: height

          });
        });
        return columnWidth;
      },
          isotope = function isotope() {
        $container.isotope({
          resizable: false,
          itemSelector: '.fugo-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };

      isotope();
      $(window).resize(isotope);
      var $optionSets = $('.fugo-gallery-menu .option-set'),
          $optionLinks = $optionSets.find('li');
      $optionLinks.click(function () {
        var $this = $(this);
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active'); // make option object dynamically, i.e. { filter: '.my-filter-class' }

        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value'); // parse 'false' as false boolean

        value = value === 'false' ? false : value;
        options[key] = value;

        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
          // changes in layout modes need extra logic
          changeLayoutMode($this, options);
        } else {
          // creativewise, apply new options
          $container.isotope(options);
        }

        return false;
      });
    }
    /*--------------------------------------------------------------
    FUGO GALLERY MASONAY FILTER JS 02
    ------------------------------------------------------------*/


    var fugo_gallery_masonay2 = $('#fugo-gallery-masonay2');

    if (fugo_gallery_masonay2.is_exist()) {
      var $container = $(fugo_gallery_masonay2),
          colWidth = function colWidth() {
        var w = $container.width(),
            columnNum = 1,
            columnWidth = 0;

        if (w > 1200) {
          columnNum = 2;
        } else if (w > 900) {
          columnNum = 2;
        } else if (w > 600) {
          columnNum = 1;
        } else if (w > 450) {
          columnNum = 1;
        } else if (w > 385) {
          columnNum = 1;
        }

        columnWidth = Math.floor(w / columnNum);
        $container.find('.fugo-grid-item').each(function () {
          var $item = $(this),
              multiplier_w = $item.attr('class').match(/fugo-grid-item-w(\d)/),
              multiplier_h = $item.attr('class').match(/fugo-grid-item-h(\d)/),
              width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
              height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
          $item.css({
            width: width // height: height

          });
        });
        return columnWidth;
      },
          isotope = function isotope() {
        $container.isotope({
          resizable: false,
          itemSelector: '.fugo-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };

      isotope();
      $(window).resize(isotope);
      var $optionSets = $('.fugo-gallery-menu .option-set'),
          $optionLinks = $optionSets.find('li');
      $optionLinks.click(function () {
        var $this = $(this);
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active'); // make option object dynamically, i.e. { filter: '.my-filter-class' }

        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value'); // parse 'false' as false boolean

        value = value === 'false' ? false : value;
        options[key] = value;

        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
          // changes in layout modes need extra logic
          changeLayoutMode($this, options);
        } else {
          // creativewise, apply new options
          $container.isotope(options);
        }

        return false;
      });
    }
    /*--------------------------------------------------------------
    FUGO GALLERY MASONAY FILTER JS 03
    ------------------------------------------------------------*/


    var fugo_gallery_masonay3 = $('#fugo-gallery-masonay3');

    if (fugo_gallery_masonay3.is_exist()) {
      var $container = $(fugo_gallery_masonay3),
          colWidth = function colWidth() {
        var w = $container.width(),
            columnNum = 1,
            columnWidth = 0;

        if (w > 1200) {
          columnNum = 1;
        } else if (w > 900) {
          columnNum = 1;
        } else if (w > 600) {
          columnNum = 1;
        } else if (w > 450) {
          columnNum = 1;
        } else if (w > 385) {
          columnNum = 1;
        }

        columnWidth = Math.floor(w / columnNum);
        $container.find('.fugo-grid-item').each(function () {
          var $item = $(this),
              multiplier_w = $item.attr('class').match(/fugo-grid-item-w(\d)/),
              multiplier_h = $item.attr('class').match(/fugo-grid-item-h(\d)/),
              width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
              height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
          $item.css({
            width: width // height: height

          });
        });
        return columnWidth;
      },
          isotope = function isotope() {
        $container.isotope({
          resizable: false,
          itemSelector: '.fugo-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };

      isotope();
      $(window).resize(isotope);
      var $optionSets = $('.fugo-gallery-menu .option-set'),
          $optionLinks = $optionSets.find('li');
      $optionLinks.click(function () {
        var $this = $(this);
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active'); // make option object dynamically, i.e. { filter: '.my-filter-class' }

        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value'); // parse 'false' as false boolean

        value = value === 'false' ? false : value;
        options[key] = value;

        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
          // changes in layout modes need extra logic
          changeLayoutMode($this, options);
        } else {
          // creativewise, apply new options
          $container.isotope(options);
        }

        return false;
      });
    }
  }); // End window LODE

  /*--------------------------------------------------------------
  FUGO MAP JS
  ------------------------------------------------------------*/

  var google_map = $('#map');

  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        icon: '../assets/images/all-img/contact/map.png',
        title: 'fugo'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>fugo' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };

    google.maps.event.addDomListener(window, 'load', init);
  }
})(jQuery);