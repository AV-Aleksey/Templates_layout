$( () => {
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow'); //Прилипалка шапки
	});
	
	//Поднятие наверх по клику на кнопку
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},100);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('nav.head-navigation').toggleClass('showMenu');
		$('li').on('click', () => {
			$('nav.head-navigation').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
	
});