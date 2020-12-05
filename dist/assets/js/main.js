// FV Text Animation
let animationSize = 100;

let styles; let i; let randomX; let randomY; let keyframes;

document.addEventListener("DOMContentLoaded", () => {
	let txts = document.getElementsByClassName('txt-ani');
	if (document.styleSheets) {
		styles = document.styleSheets[document.styleSheets.length - 1];
	} else {
		document.getElementsByTagName('HEAD').item(0).createElement('style');
		styles = document.styleSheets[document.styleSheets.length - 1];
	}
	for (i in txts) {
		if (i >= 0) {
			randomX = Math.random() * animationSize - animationSize / 2;
			randomY = Math.random() * animationSize - animationSize / 2;
			keyframes = "@keyframes move" + i + " { from { transform: translate(0, 0) } to { transform: translate(" + randomX + "vw, " + randomY + "vh) } }";
			styles.insertRule(keyframes, styles.cssRules.length);

			txts[i].style.left = i - txts.length / 2 + "em";
			txts[i].style.animation = "move" + i + " 1.5s 5s both";
		}
	}
});



// side menu close
document.addEventListener("DOMContentLoaded", () => {
	const menues = document.querySelectorAll('header ul li');
	const menuFlg = document.getElementById('nav-toggle');
	menues.forEach((menu) => {
		menu.addEventListener('click', () => {
			if (menuFlg.checked) {
				menuFlg.checked = false;
			}
		});
	});
});



// Works
document.addEventListener("DOMContentLoaded", () => {
	const btns = document.querySelectorAll('.list-content img');
	btns.forEach((btn) => {
		btn.addEventListener('click', () => {
			document.getElementById('show_box').style.opacity = 0;
			const src = this.getAttribute('src');
			const href = this.dataset.href;
			const h4 = this.dataset.h4;
			const h3 = this.dataset.h3;
			const p = this.dataset.p;
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
});



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
const sections = document.querySelectorAll("section");
const observerRoot = document.querySelector("main");
const options = {
	root: observerRoot,
	rootMargin: "-50% 0px",
	threshold: 0
};
const observer = new IntersectionObserver(doWhenIntersect, options);
sections.forEach(section => {
	observer.observe(section);
});

function doWhenIntersect(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			activatePagination(entry.target);
		}
	});
}

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