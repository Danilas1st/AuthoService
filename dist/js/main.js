


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();

	popup('.popup_submit', '.services_btn_order');
	popup('.popup_info', '.services_item_img');

	if(windowWidth < mediaPoint1 + 2) {
		burgerMobile();
	}
});


$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}



function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);




$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})



function popup(popups, btn) {
	let popupWindow = document.querySelector(popups)
	let btnTrigger = document.querySelectorAll(btn)
	let removeWindow = popupWindow.querySelectorAll('.close_popups')
	let btnOrder = popupWindow.querySelector('.popup_form_i_order')
	

	let nextPopup = popupWindow.dataset.window
	if(btnOrder) {
		btnOrder.addEventListener('click', function() {
			if(this.closest('.popup_info')) {
				let infoPopup = this.closest('.popup_info')
				infoPopup.classList.remove('active')
			} 
			opens('.popup_submit');
		})
	}
	

	btnTrigger.forEach((item) => {
		item.addEventListener('click', function(e) {
			popupWindow.classList.add('active')
		})
	});

	removeWindow.forEach((item, i) => {
		item.addEventListener('click', function(e) {
			popupWindow.classList.remove('active')
		})
	});


}



// function opens(popupQuery) {
// 	document.querySelector(popupQuery).classList.add('active')
// }

// function burgerMobile() {
// 	const triggerBurger = document.querySelector('.burger_trigger')
// 	const burgerPopup = document.querySelector('.burger')
// 	const burgerFail = document.querySelectorAll('.close_burger')

// 	triggerBurger.addEventListener('click', (e) => {
// 		burgerPopup.classList.add('active')
// 		if(e.target.classList.contains('burger_trigger')) {
// 			e.target.classList.add('active')
// 		}
// 	})

	// Array.from(burgerFail).map((item) => {
	// 	item.addEventListener('click', () => {
	// 		burgerPopup.classList.remove('active')
	// 		triggerBurger.classList.remove('active')
	// 		win.style.overflow = "";
	// 	})
	// })

	burgerFail.forEach(item => {
		item.addEventListener('click', () => {
			burgerPopup.classList.remove('active')
			triggerBurger.classList.remove('active')
			win.style.overflow = "";
		})
	});


// }