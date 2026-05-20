// Service Detail
$(document).ready(function () {
  $(".tab-check").on("change", function () {
    let parent = $(this).closest(".service-issues-in");
    let content = parent.find(".service-issues-content");

    if ($(this).is(":checked")) {
      parent.addClass("active");
      content.stop(true, true).slideDown("fast");
    } else {
      parent.removeClass("active");
      content.stop(true, true).slideUp("fast");
    }
  });
});
// Service Detail

// Daman  Sir

// FEATURED-CATEGORY-SLIDER

$(".featured-category-slider").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  draggable: false,
  infinite: true,
  autoplay: false,

  responsive: [
    {
      breakpoint: 1439, // <=1024
      settings: {
        slidesToShow: 6,
      },
    },

    {
      breakpoint: 1024, // <=1024
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 767, // <=768
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// FEATURED-CATEGORY-SLIDER

// TOP-SERVICES

$(".top-services-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  draggable: false,
  infinite: true,
  autoplay: false,

  responsive: [
    {
      breakpoint: 1024, // <=1024
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767, // <=768
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// TOP-SERVICES

/* DATPICKER */

$(function () {
  // Safety check to ensure datepicker element exists before initializing
  if ($("#datepicker").length || $("#datepicker-2").length) {
    $("#datepicker, #datepicker-2").datepicker({
      showOtherMonths: true,
      dayNamesMin: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      minDate: new Date(),
    });
  }
});

/* DATPICKER */

// Daman  Sir

// Header Responsive js

let icon = document.querySelector(".icon-header");
let right = document.querySelector(".right-section");

// FIXED: Only attach event listeners if elements exist on the current page view
if (icon && right) {
  icon.addEventListener("click", () => {
    right.classList.toggle("showData");

    const barCross = document.getElementById("bar-cross");
    if (barCross) {
      if (right.classList.contains("showData")) {
        barCross.className = "fa-solid fa-circle-xmark";
      } else {
        barCross.className = "fa-solid fa-bars";
      }
    }
  });
}

// Header Responsive js

//Home  Hero Slider

$(".hero-slider").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: false,
  draggable: false,
  dots: true,
  autoplay: true,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//Home  Hero Slider

//Home  Upcoming Bookings Slider
$(".upcoming-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  autoplay: true,
  arrows: false,
  variableWidth: true,
});
//Home  Upcoming Bookings Slider

//Home my-quotes More-Service
$(document).ready(function () {
  $(".service-list-type .more-service").click(function () {
    let parent = $(this).closest(".service-list-type");

    parent.find(".service-data").show();
    parent.find(".more-service").hide();
    parent.find(".less-service").css("display", "list-item");
  });

  $(".service-list-type .less-service").click(function () {
    let parent = $(this).closest(".service-list-type");

    parent.find(".service-data").hide();
    parent.find(".more-service").css("display", "list-item");
    parent.find(".less-service").hide();
  });
});
//Home my-quotes More-Service

//Home Additional Services
$(document).ready(function () {
  $(".additional-text").click(function () {
    // UL toggle with slide effect
    $(this).next(".service-list").slideToggle(300);

    // Icon rotate
    $(this).find("img").toggleClass("rotate");
  });
});

//Home Additional Services

// VERIFICATION-CODE

$(".inputs").on("keyup.verify", function () {
  if (this.value.length === this.maxLength) {
    $(this).next(".inputs").focus();
  } else if (this.value.length === 0) {
    $(this).prev(".inputs").focus();
  }
});

// VERIFICATION-CODE
