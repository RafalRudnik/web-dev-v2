gsap.registerPlugin(ScrollTrigger);

const circle = document.querySelector('.header__img-color');
const headerAnim = document.querySelector('.header__txt-main');
const aboutLeft = document.querySelector('.about__left');
const aboutRight = document.querySelector('.about__right');
const techTxt = document.querySelectorAll('.technology__txt');
const contactTxt = document.querySelector('.contact__card-left-txt');
const contactImg = document.querySelectorAll('.contact-img');
const allTimeLine = document.querySelectorAll('.flag-wrapper span');
const workLink = document.querySelector('.about__work-txt');

let resolution = gsap.matchMedia();

gsap.fromTo(
	circle,
	{
		rotation: 0,
	},
	{
		rotation: 20,
		stagger: 0.2,
		duration: 2,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: circle,
			start: 'top: -40%',
			scrub: true,
		},
	}
);

gsap.fromTo(
	headerAnim.children,
	{
		x: 0,
		opacity: 1,
	},
	{
		x: '+150',
		opacity: 0.4,
		stagger: 0.2,
		duration: 3,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: headerAnim,
			start: 'top 30%',
			// end: 'bottom', //gdzie ma sie skonczyc
			scrub: true, //scroll dziala w obie strony
			// markers: true,
		},
	}
);

// ======================= ABOUT LEFT SIDE =================

gsap.fromTo(
	aboutLeft.children,
	{
		y: '+=150',
		opacity: 0,
	},
	{
		y: 0,
		opacity: 1,
		stagger: 0.2,
		duration: 2,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: aboutLeft,
			start: 'top: 70%',
			end: 'top: 0%',
			scrub: true,
			onLeave: () => ScrollTrigger.clearScrollMemory(),
		},
	}
);

// ======================= ABOUT RIGHT SIDE =================

gsap.fromTo(
	aboutRight.children,
	{
		y: '+=100',
		opacity: 0,
	},
	{
		y: 0,
		opacity: 1,
		stagger: 0.4,
		duration: 2.5,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: aboutRight,
			scroller: '.main_container',
			start: 'top: 75%',
			end: 'top: 0%',
			scrub: true,
			onLeave: () => ScrollTrigger.clearScrollMemory(),
		},
	}
);

// ======================= ABOUT TIMELININE ================

allTimeLine.forEach((line) => {
	gsap.fromTo(
		line,
		{
			opacity: 0,
		},
		{
			opacity: 1,
			stagger: 0.2,
			duration: 2,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: line,
				start: 'top: 60%',
			},
		}
	);
});

// ======================= ABOUT LINK ================

resolution.add('(min-width: 768px)', () => {
	gsap.fromTo(
		workLink,
		{
			y: 0,
			x: 0,
		},
		{
			y: '+=100',
			x: '+=70%',
			stagger: 0.4,
			duration: 2.5,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: workLink,
				start: 'top: 50%',
				end: 'top: 25%',
				scrub: true,
				pin: true,
				markers: true,
			},
		}
	);
});

// ======================= TECH TXT =================

techTxt.forEach((techItem) => {
	gsap.fromTo(
		techItem,
		{
			y: '+=100',
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			stagger: 0.2,
			duration: 2,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: techItem,
				start: 'top 60%',
			},
		}
	);
});

// ======================== CONTACT ====================

gsap.fromTo(
	contactTxt.children,
	{
		x: 0,
		opacity: 1,
	},
	{
		x: '+150',
		opacity: 0.4,
		stagger: 0.2,
		duration: 3,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: contactTxt,
			start: 'top 2%',
			// end: 'bottom', //gdzie ma sie skonczyc
			scrub: true, //scroll dziala w obie strony
			// markers: true,
		},
	}
);

contactImg.forEach((img) => {
	gsap.fromTo(
		img,
		{
			y: '+=150',
		},
		{
			y: 0,
			stagger: 0.3,
			duration: 1.5,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: img,
				start: 'top 70%',
				end: 'top: 20%',
				scrub: true,
			},
		}
	);
});

AOS.init({
	startEvent: 'DOMContentLoaded',
	offset: 200,
	once: false,
});
