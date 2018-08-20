jQuery(document).ready(function($) {

	document.getElementById('calm').play();

	var box = $('.box');
	$(window).scroll(function() {

		if ( $(this).scrollTop() >= $('#box2').offset().top ) {

			box.addClass('glitched');

			document.getElementById('calm').pause();

			document.getElementById('glitch').play();

			$('h1').addClass('glitched-text');

			function removeAll() {
				$('body *').not('.finish, .finish h1').remove();
				$('.finish').css('display', 'block');
			}

			setTimeout(removeAll, 10000);

		var		title = $('title'),
				titles = [
					'hacked',
					'game over',
					'you are done',
					'goodbye',
					'njkdfv',
					'sskllms',
					'klfsll',
					'fklsls',
					',lvkf,vl',
					'OVER',
					',kldss',
					'mqmq;',
					'glfs;m',
					'vm;msl,m'
				],
			random = Math.floor(Math.random() * titles.length);

		console.log(random);

		function changeTitle() {

			setInterval (function() {
				title.text(titles[random]);
			}, 10);

		}
		changeTitle();



		}
	});


});
