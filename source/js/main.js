// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя

$(document).ready(function(){

	// $('input[type=tel]')
	// 	.inputmask("8 (999) 999 99 99");


	// $('.js-popup-img')
	// 	.magnificPopup({
	// 		type:'image',
	// 		closeOnContentClick: true,
	// 		fixedContentPos: true,
	// 		mainClass: 'mfp-no-margins mfp-with-zoom',
	// 		image: {
	// 			verticalFit: true
	// 		},
	// 		zoom: {
	// 			enabled: true,
	// 			duration: 300
	// 		}
	// 	});

    $('.js-hamburger').on('click', function (ev) {
        $(this).toggleClass('header__hamburger--active')
        $('.js-menu').toggleClass('menu--active')
        $('.js-menu').hasClass('menu--active') ? $('body').css({'overflow-y': 'hidden',}) : $('body').css({'overflow-y': 'visible',})

    })
});
