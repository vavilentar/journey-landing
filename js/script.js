// $('.slider-item').on('click', function (e) {
// 	e.preventDefault()
// })

$(document).ready(function () {

	$('ul.slider-list').on('click', 'li:not(.active)', function () {
		$(this)

			.addClass('active').siblings().removeClass('active')
			.closest('div.container').find('div.catalog__content').removeClass('active').eq($(this).index()).addClass('active');
	});

})

// $(window).scroll(function() {
// 	let height = $(window).scrollTop();
	
// 	if(height > 200){
// 	$('.slider-list').addClass('fixed');
// 	} else{
// 	$('.slider-list').removeClass('fixed');
// 	}
	
// });