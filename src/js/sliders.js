if (document.querySelector('.mainslider')) {
	$('.mainslider__body').slick({
		lazyLoad: 'ondemand',
		dots: true,
		arrows: false,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: 'mainslider__dotts',
		adaptiveHeight: true
	});

	document.addEventListener('DOMContentLoaded', function () {
		let mainsliderImages = document.querySelectorAll('.mainslider__image');
		let mainsliderImageArr = Array.prototype.slice.call(mainsliderImages);
		let mainsliderDotts = document.querySelectorAll('.mainslider__dotts li button');
		mainsliderImageArr = mainsliderImageArr.slice(1);

		for (let index = 0; index < mainsliderImageArr.length; index++) {
			const mainsliderImage = mainsliderImageArr[index].querySelector('img').getAttribute('src');
			if (mainsliderDotts[index] !== undefined) {
				mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
			}
		}
	});
}

// Products slider

if (document.querySelector('.products-slider')) {

	$('.products-slider__item').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.products-slider__info-pagination').html('<span class="slick-pagination-current">' + i + '</span>' + ' / ' + '<span class="slick-pagination-total">' + slick.slideCount + '</span>');
	});

	$('.products-slider__item').slick({
		lazyLoad: 'ondemand',
		dots: false,
		arrows: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: '.products-slider__arrow_prev',
		nextArrow: '.products-slider__arrow_next'
	});
}

// Brands slider 

if (document.querySelector('.brands-slider')) {
	$('.brands-slider__body').slick({
		lazyLoad: 'ondemand',
		dots: false,
		arrows: true,
		infinite: true,
		speed: 600,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '.brands-slider__arrow_prev',
		nextArrow: '.brands-slider__arrow_next',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
}





//   $('.slider-lots__body').slick({
// 	lazyLoad: 'ondemand',
// 	dots: false,
// 	arrows: true,
// 	infinite: true,
// 	speed: 600,
// 	prevArrow: '.control-slider-lots__arrow_prev',
// 	nextArrow: '.control-slider-lots__arrow_next',
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	responsive: [
// 		{
// 		  breakpoint: 768,
// 		  settings: {
// 			slidesToShow: 2,
// 		  }
// 		},
// 		{
// 		  breakpoint: 485,
// 		  settings: {
// 			slidesToShow: 1,
// 		  }
// 		}
// 	  ]
//   });

//   $('.slider-quotes__body').slick({
// 	lazyLoad: 'ondemand',
// 	dots: false,
// 	arrows: true,
// 	infinite: true,
// 	speed: 1200,
// 	nextArrow: '.control-slider-quotes__circle',
// 	prevArrow: '',
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	fade: true,
// 	adaptiveHeight: true
//   });