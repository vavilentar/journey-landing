// $('.slider-item').on('click', function (e) {
// 	e.preventDefault()
// })

// $(window).scroll(function() {
// 	let height = $(window).scrollTop();
	
// 	if(height > 200){
// 	$('.slider-list').addClass('fixed');
// 	} else{
// 	$('.slider-list').removeClass('fixed');
// 	}
	
// });

const infoBoxes = document.querySelectorAll('.info-block');
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
	const triggerBottom = window.innerHeight / 5 * 4;

	infoBoxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add('box-show');

		} else {
			box.classList.remove('box-show');
		}
		
	});
}

$(document).ready(function () {

	$('ul.slider-list').on('click', 'li:not(.active)', function () {
		$(this)

			.addClass('active').siblings().removeClass('active')
			.closest('div.container').find('div.catalog__content').removeClass('active').eq($(this).index()).addClass('active');
	});

$('.modal-close').on('click', function() {
	$('.overlay, #login').fadeOut('fast');
});

$('.account-link').each(function(i) {
	$(this).on('click', function() {
		$('.overlay, #login').fadeIn('fast');
	});
});


})