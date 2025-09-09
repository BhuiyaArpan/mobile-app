
$(".filter_btn").click(function(){
	 $('.filter_sidebar_area').toggleClass("open");
	$('.right_side_menu_overlay').toggleClass("open");	
	$('body').css('overflow', 'hidden');	
  });
$(".back_btn").click(function(){
	 $('.filter_sidebar_area').removeClass("open");
	$('.right_side_menu_overlay').removeClass("open");
$('.filter_sidebar_list_area').removeClass("open");	
});

/*=============================================*/
/*--------------- [_Accordion] ----------------*/
/*=============================================*/
$('.accordion').find('.accordion-header').on('click', function() {
	// Adds Active Class
	$(this).toggleClass('active');
	// Expand or Collapse This Panel
	$(this).next().slideToggle(300, "swing");
	// Hide The Other Panels
	$('.accordion-body').not($(this).next()).slideUp(300, "swing");
	// Removes Active Class From Other Titles
	$('.accordion-header').not($(this)).removeClass('active');
});  

$( ".modal22" ).insertAfter( ".modal_elementer_inner" );

  $('.gullak-slider').owlCarousel({
    nav:false,
    margin:0,
	autoplay:false,
    loop:true,
    dots:true,
    smartSpeed:	500,
	 center: true,
	navText: [
    "<span><i class='fa-light fa-arrow-left'></i></span>",
    "<span><i class='fa-light fa-arrow-right'></i></span>"
  ],
	
	/*animateOut: 'fadeOut',
       animateIn: 'fadeIn',*/
    responsive:{
      0:{
        items:1,		
		stagePadding: 50,		
		 
      },
	  480:{
        items:1,
		stagePadding: 50,		
		 
      },
      600:{
        items:1,
		stagePadding: 50,	
      },
      767:{
        items:1,
		stagePadding: 50,	
      },
      992:{
        items:3
      },
      1200:{
        items:3
      },
      1440:{
        items:3
      }
    }
  });
  
  $('.gullak-slider-2').owlCarousel({
    nav:false,
    margin:10,
	autoplay:false,
    loop:true,
    dots:true,
    smartSpeed:	500,
	 center: true,
	navText: [
    "<span><i class='fa-light fa-arrow-left'></i></span>",
    "<span><i class='fa-light fa-arrow-right'></i></span>"
  ],
	
	/*animateOut: 'fadeOut',
       animateIn: 'fadeIn',*/
    responsive:{
      0:{
        items:4,		
		stagePadding: 0,		
		 
      },
	  480:{
        items:4,
		stagePadding: 0,		
		 
      },
      600:{
        items:4,
		stagePadding: 0,	
      },
      767:{
        items:4,
		stagePadding: 0,	
      },
      992:{
        items:6
      },
      1200:{
        items:6
      },
      1440:{
        items:6
      }
    }
  });
  
   $('.tranding-slider').owlCarousel({
    nav:false,
    margin:0,
	autoplay:false,
    loop:true,
    dots:true,
    smartSpeed:	500,
	 center: true,
	navText: [
    "<span><i class='fa-light fa-arrow-left'></i></span>",
    "<span><i class='fa-light fa-arrow-right'></i></span>"
  ],
	
	/*animateOut: 'fadeOut',
       animateIn: 'fadeIn',*/
    responsive:{
      0:{
        items:1,		
		stagePadding: 50,		
		 
      },
	  480:{
        items:1,
		stagePadding: 50,		
		 
      },
      600:{
        items:1,
		stagePadding: 50,	
      },
      767:{
        items:1,
		stagePadding: 50,	
      },
      992:{
        items:3
      },
      1200:{
        items:3
      },
      1440:{
        items:3
      }
    }
  });
  
  $('.homeBannerSlider').owlCarousel({
    nav:false,
    margin:10,
	autoplay:false,
    loop:true,
    dots:true,
    smartSpeed:	500,
	 center: true,
	navText: [
    "<span><i class='fa-light fa-arrow-left'></i></span>",
    "<span><i class='fa-light fa-arrow-right'></i></span>"
  ],
	
	/*animateOut: 'fadeOut',
       animateIn: 'fadeIn',*/
    responsive:{
      0:{
        items:1,		
		stagePadding: 50,		
		 
      },
	  480:{
        items:1,
		stagePadding: 50,		
		 
      },
      600:{
        items:1,
		stagePadding: 50,	
      },
      767:{
        items:1,
		stagePadding: 50,	
      },
      992:{
        items:3
      },
      1200:{
        items:3
      },
      1440:{
        items:3
      }
    }
  });
  
  
function openPopupById(id) {
  $('#' + id).toggleClass('open');
  $('#overlay_' + id).toggleClass('open');
  $('body').toggleClass('pageBodyhiden');
  //$('body').css('overflow', 'hidden');	
}

function closePopupById(id) {
  $('#' + id).removeClass('open');
  $('#overlay_' + id).removeClass('open');
  $('body').removeClass('pageBodyhiden');
  //$('body').css('overflow', 'auto');
}

// Optional: Click on overlay to close

$('.customeOverlayPopup').on('click', function () {
  var popupId = this.id.replace('overlay_', '');
  closePopupById(popupId);
  //$('body').css('overflow', 'auto');
});
/*$('.customeOverlayPopup').on('click', function () {
  var popupId = this.id.replace('overlay_', '');
  closePopupById(popupId);  
});*/
$(document).ready(function () {
  function toggleFocusClass(input) {
    const value = $(input).val();
    const wrapper = $(input).closest('.inputFieldTextField');

    if (document.activeElement === input || value.trim() !== '') {
      wrapper.addClass('focused');
    } else {
      wrapper.removeClass('focused');
    }
  }

  // Bind all events
  $('.textMain').on('focus input blur', function () {
    toggleFocusClass(this);
  });

  // Trigger on load for pre-filled values
  $('.textMain').each(function () {
    toggleFocusClass(this);
  });
});
$(document).ready(function () {
  function toggleInputState(input) {
    const wrapper = $(input).closest('.inputFieldTextField');
    const clearBtn = wrapper.find('.clearInputBtn');
    const hasValue = $(input).val().trim() !== '';

    // Toggle 'focused' class
    if (document.activeElement === input || hasValue) {
      wrapper.addClass('focused');
    } else {
      wrapper.removeClass('focused');
    }

    // Show or hide clear button
    clearBtn.toggle(hasValue);
  }

  // Handle input, focus, and blur events
  $('.textMain').on('input focus blur', function () {
    toggleInputState(this);
  });

  // Handle clear button click
  $('.clearInputBtn').on('click', function () {
    const wrapper = $(this).closest('.inputFieldTextField');
    const input = wrapper.find('.textMain');

    input.val('');
    input.focus(); // optional: keep focus after clearing
    toggleInputState(input[0]);
  });

  // Initialize state on page load
  $('.textMain').each(function () {
    toggleInputState(this);
  });
});




$(".sideMenuBtn").click(function(){
  $(".sideMenubar").toggleClass("open");
  $(".sideMenubarOverlay").toggleClass("open");
  //$('body').toggleClass("open");
  $('body').css('overflow', 'hidden');	  
});


$(".sideMenubarOverlay").click(function(){
  $(".sideMenubar").removeClass("open");  
  $(".sideMenubarOverlay").removeClass("open"); 
  $('body').css('overflow', 'auto');
});	

$(".menuBackBtn").click(function(){
  $(".sideMenubar").removeClass("open");  
  $(".sideMenubarOverlay").removeClass("open");  
  $('body').css('overflow', 'auto');  
});

// step js

const steps = document.querySelectorAll(".step");        // top circles
const stepBoxes = document.querySelectorAll(".step-box"); // bottom contents
const nextBtns = document.querySelectorAll(".nextBtn");   // all Next buttons
const prevBtns = document.querySelectorAll(".prevBtn");   // all Prev buttons

let current = 0;

function updateSteps() {
  // Update step indicators (top)
  steps.forEach((step, index) => {
    step.classList.toggle("active", index <= current);
  });

  // Update content boxes (bottom)
  stepBoxes.forEach((box, index) => {
    box.classList.toggle("active", index === current);
  });
}

// Attach events to all "Next" buttons
nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (current < steps.length - 1) {
      current++;
      updateSteps();
    }
  });
});

// Attach events to all "Prev" buttons
prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      updateSteps();
    }
  });
});

// Init
updateSteps();


   $('.year-wrapper').owlCarousel({
    nav:true,
    margin:0,
    items:1,
	  autoplay:false,
    loop:false,
    dots:false,
    smartSpeed:	500,
	  center: true,
	  navText: [
    "<span><i class='fa-light fa-arrow-left'></i></span>",
    "<span><i class='fa-light fa-arrow-right'></i></span>"
  ]
  });


  // toggle passowrd
  
$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") === "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

