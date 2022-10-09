// FV Text Animation
const skils = ['javascript', 'HTML', 'CSS', 'GAS', 'Nuxt.js', 'Node.js', 'kintone', 'Git', 'Atom', 'Mac', 'Windows', 'x'];
const skilBox = document.querySelector('.skils-content');
let countOfSkils = 0;
let countOfSkil = 0;

let loop = window.setInterval(setSkil, 6000);

function setSkil() {
	if (countOfSkils >= skils.length) {
		countOfSkils = 0;
	}
	let skil = skils[countOfSkils];
	fadeOut('.skils-content');
	window.setTimeout(() => {
		skilBox.textContent = skil;
		fadeIn('.skils-content');
	}, 1500)

	countOfSkils++;
}



// side menu close
const menues = document.querySelectorAll('header ul li');
const menuFlg = document.getElementById('nav-toggle');
menues.forEach((menu) => {
	menu.addEventListener('click', () => {
		if (menuFlg.checked) {
			menuFlg.checked = false;
		}
	});
});




// Get Blog Article
// const targetURL = 'https://blog.udcxx.me/summary.json';
const targetURL = '/assets/js/summary.json';

let request = new XMLHttpRequest();
request.open('GET', targetURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	const articleList = request.response['fileMap'];
	const keyList = Object.keys(articleList);

	let randomNum = [];
	for (var i = 0; i < keyList.length; i++) {
		let num = Math.round( Math.random() * 10000 ) + 1;
		while (num > keyList.length || randomNum.includes(num)) {
			num = Math.round( Math.random() * 10000 ) + 1;
		}
		randomNum.push(num);
	}
	const getTitle = (n) => {
		return articleList[keyList[randomNum[n]]]['title'];
	}
	const getImage = (n) => {
		return 'https://blog.udcxx.me/images/' + articleList[keyList[randomNum[n]]]['eyecatch'];
	}
	const getUrl = (n) => {
		let url = articleList[keyList[randomNum[n]]]['base'];
		url = 'https://blog.udcxx.me/article/' + url.replace(/^(\d{6})-(.*)\.json$/, '$1/$2') + '/';
		return url;
	}

	const blogNodes = document.querySelectorAll('#blog .item');
	let nth = 0;
	blogNodes.forEach((blogNode) => {
		blogNode.querySelector('.item-link').setAttribute('href', getUrl(nth));
		blogNode.querySelector('.item-image').setAttribute('src', getImage(nth));
		blogNode.querySelector('.item-ttl').textContent = getTitle(nth);
		nth++;
	});
}



// Works
const btns = document.querySelectorAll('.list-content img');
btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		document.getElementById('show_box').style.opacity = 0;
		const src = e.target.getAttribute('src');
		const href = e.target.dataset.href;
		const h4 = e.target.dataset.h4;
		const h3 = e.target.dataset.h3;
		const p = e.target.dataset.p;
		window.setTimeout(function() {
			if (href) {
				document.getElementById('show_href').setAttribute('href', href);
				if (document.getElementById('show_href').classList.contains('hide')) {
					document.getElementById('show_href').classList.remove('hide');
				}
			} else {
				if (!document.getElementById('show_href').classList.contains('hide')) {
					document.getElementById('show_href').classList.add('hide');
				}
			}
			document.getElementById('show_img').setAttribute('src', src);
			document.getElementById('show_ttl_sub').textContent = h4;
			document.getElementById('show_ttl').textContent = h3;
			document.getElementById('show_txt').textContent = p;
		}, 500);
		window.setTimeout(function() {
			document.getElementById('show_box').style.opacity = 1;
		}, 550);

	});
});



// Event on Scroll
//     - in View
//     - change Header
const targets = document.querySelectorAll('.inviewtoggle');
const sections = document.querySelectorAll('section');
const headerLinks = document.querySelectorAll('header ul li a');
document.addEventListener('scroll', () => {
	const fvPosition = document.querySelector('#fv').getBoundingClientRect().bottom;
	const actionPoint = window.innerHeight * 0.9;

	targets.forEach((target) => {
		if (actionPoint > target.getBoundingClientRect().top) {
			target.classList.add('inview');
		}
	});

	sections.forEach((section) => {
		if (actionPoint > section.getBoundingClientRect().top) {
			headerLinks.forEach((item) => {
				const link = item.href.replace(document.URL, '').replace('#', '');
				if (link == section.id) {
					document.querySelector('header ul li a.active').classList.remove('active');
					item.classList.add('active');
				}
			});
		}
	});


	if (actionPoint > fvPosition) {
		document.querySelector('header').style.opacity = 1;
	}
}, true);



// Smooth scroll
const paginations = document.querySelectorAll("a.smooth");
paginations.forEach(pagination => {
	pagination.addEventListener("click", e => {
		e.preventDefault();
		const targetId = e.target.hash;
		const target = document.querySelector(targetId);
		target.scrollIntoView({ behavior: "smooth" });
	});
});




// Intersection Observer
function activatePagination(element) {
	const currentActiveIndex = document.querySelector("header li a.active");
	if (currentActiveIndex !== null) {
		currentActiveIndex.classList.remove("active");
	}
	const newActiveIndex = document.querySelector(`a[href='#${element.getAttribute("id")}']`);
	if (newActiveIndex !== null) {
		newActiveIndex.classList.add("active");
	}
}



// content Form
document.getElementById("contactform").addEventListener("click", () => {
	fadeOut("#contactform");
});
document.querySelector(".contactform-inner").addEventListener("click", (event) => {
	event.stopPropagation();
});




// fadeIn
function fadeIn(target) {
	const targetEle = document.querySelector(target);

	// 対象が表示されていたら何もしない
	if (targetEle.style.zIndex > 0) { return };

	targetEle.style.zIndex = '2';
	targetEle.style.opacity = 0;
	targetEle.style.transition = 'opacity 1s ease-out';

	window.setTimeout(function() {
		targetEle.style.opacity = 1;
	}, 100);
}
function fadeOut(target) {
	const targetEle = document.querySelector(target);

	// 対象が非表示だったら何もしない
	if (targetEle.style.zIndex < 0) { return };

	targetEle.style.transition = 'opacity 1s ease-out';
	targetEle.style.opacity = 0;

	window.setTimeout(function() {
		targetEle.style.zIndex = '-10';
	}, 1000);
}



// reCAPTCHA
function verify() {
	document.getElementById("contactform-submit").disabled = false;
}
document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("contactform-submit").disabled = true;
})
