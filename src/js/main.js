const menuBtnOne = document.querySelector('.ti-menu-2');
const menuBtnTwo = document.querySelector('.ti-menu');
const nav = document.querySelector('.nav');
const allLinks = document.querySelectorAll('.nav__link');
const allUlItems = document.querySelectorAll('.nav__list li');
const logo = document.querySelector('.navigation__logo');
const menu = document.querySelector('.navigation__menu-txt');
const burger = document.querySelector('.navigation__menu-btn');
const footerYear = document.querySelector('footer p span');

// ================= FORM =====================

const sendBtn = document.querySelector('.sendBtn');
const msgStatus = document.querySelector('.msg-status');
const input = document.querySelector('#name');
const mailInput = document.querySelector('#email');

const handleMainNav = () => {
	menuBtnOne.classList.toggle('hide');
	menuBtnTwo.classList.toggle('hide');
	nav.classList.toggle('showNav');
	handleNavItemsAnimation();
};

const navBtnAnimation = () => {
	navBtn.classList.add('jello-horizontal');
	setTimeout(() => {
		navBtn.classList.remove('jello-horizontal');
	}, 1000);
};

const handleNavItemsAnimation = () => {
	let delayTime = 1;
	allUlItems.forEach((link) => {
		link.classList.toggle('nav-item-animation');
		link.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const handleBurger = () => {
	if (window.scrollY >= 100) {
		logo.classList.add('hideLogo');
		menu.classList.add('hideLogo');
		burger.classList.add('showBurger');
	} else {
		logo.classList.remove('hideLogo');
		menu.classList.remove('hideLogo');
		burger.classList.remove('showBurger');
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

const checkName = (e) => {
	const contactBox = input.closest('.contact-box');
	if (input.value === '') {
		contactBox.classList.add('error');
		e.preventDefault();
	} else {
		contactBox.classList.remove('error');
	}
};

const checkMail = (mailInput, e) => {
	const contactBox = mailInput.closest('.contact-box');
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/i;
	if (re.test(mailInput.value)) {
		contactBox.classList.remove('error');
	} else {
		contactBox.classList.add('error');
		e.preventDefault();
	}
};

const checkErrors = (e) => {
	const allContactBox = document.querySelectorAll('.contact-box');
	let errorCount = 0;
	allContactBox.forEach((box) => {
		if (box.classList.contains('error')) {
			errorCount++;
			e.preventDefault();
		}
	});
	if (errorCount == 0) {
		handleMailSend();
	}
	console.log(errorCount);
};

const handleMailSend = () => {
	if (document.location.search === '?mail_status=sent') {
		msgStatus.classList.add('success');
		msgStatus.textContent = 'Wiadomość wysłana!';

		setTimeout(() => {
			msgStatus.classList.remove('success');
		}, 3000);
	}

	if (document.location.search === '?mail_status=error') {
		msgStatus.classList.add('error');
		msgStatus.textContent = 'Wystąpił błąd.';

		setTimeout(() => {
			msgStatus.classList.remove('error');
		}, 3000);
	}
};

sendBtn.addEventListener('click', (e) => {
	// e.preventDefault();
	checkName(e);
	checkMail(mailInput, e);
	checkErrors(e);
});
handleCurrentYear();
allLinks.forEach((link) => link.addEventListener('click', handleMainNav));
menuBtnOne.addEventListener('click', handleMainNav);
menuBtnTwo.addEventListener('click', handleMainNav);
window.addEventListener('scroll', handleBurger);
