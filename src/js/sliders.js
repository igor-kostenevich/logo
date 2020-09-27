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
			if (mainsliderDotts[index] !== undefined){
				mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
			}
		}
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