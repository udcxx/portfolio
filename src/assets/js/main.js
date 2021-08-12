// FV Text Animation
let skilsPosition = 0;
let charPosition = 0;

document.addEventListener("DOMContentLoaded", () => {
	loop(skilsPosition)

	// skils.forEach((skil) => {
	// 	dom.textContent = '';
	// 	let position = 0;
	// 	const getCharacter = (position) => {
	// 		return skil.charAt(position);
	// 	}
	// 	for await (let i of skil.length) {
	// 		this.setTimeout(() => {
	// 			console.log(getCharacter(i));
	// 			dom.textContent = dom.textContent + getCharacter(i);
	// 		}, 3000);
	// 		position ++;
	// 	}
	// 	if (count >= skils.length) {
	// 		count = 0;
	// 	} else {
	// 		count++;
	// 	}
	// });
});
async function loop(n) {
	const skils = ['javascript', 'HTML/CSS', 'GAS', 'Nuxt.js', 'Node.js', 'Git', 'Atom', 'Mac', 'Windows'];
	const dom = document.querySelector('.skils-content');

	const skil = skils[n];

	if (charPosition === 0) {
		dom.textContent = '';
		await setSkil(skil.charAt(charPosition));
		charPosition++;
	} else if (charPosition < skil.length) {
		await setSkil(skil.charAt(charPosition));
		charPosition++;
	} else {
		charPosition = 0;
		skilsPosition++;
	}

	await loop(skilsPosition)

	// if (skilsPosition >= skils.length) {
	// 	skilsPosition = 0;
	// }
}
async function setSkil(char) {
	const dom = document.querySelector('.skils-content');

	setTimeout(() => {
		dom.textContent = dom.textContent + char;
	}, 3000)
}



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



// Get Blog Article
document.addEventListener("DOMContentLoaded", () => {
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
});



// Works
document.addEventListener("DOMContentLoaded", () => {
	const btns = document.querySelectorAll('.list-content img');
	btns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			document.getElementById('show_box').style.opacity = 0;
			console.log(e.target);
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



// fadeIn
function fadeIn(targetId) {
	const target = document.getElementById(targetId);

	// 対象が表示されていたら何もしない
	if (target.style.display != 'none') { return };

	target.style.display = 'block';
	target.style.opacity = 0;
	target.style.transition = 'opacity 1s ease-out';

	window.setTimeout(function() {
		target.style.opacity = 1;
	}, 100);
}
function fadeOut(targetId) {
	const target = document.getElementById(targetId);

	// 対象が非表示だったら何もしない
	if (target.style.display == 'none') { return };

	target.style.transition = 'opacity 1s ease-out';
	target.style.opacity = 0;

	window.setTimeout(function() {
		target.style.display = 'none';
	}, 1000);
}
document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("contactform").addEventListener("click", () => {
		fadeOut("contactform");
	});
	document.querySelector(".contactform-inner").addEventListener("click", (event) => {
		event.stopPropagation();
	});
})



// reCAPTCHA
function verify() {
	document.getElementById("contactform-submit").disabled = false;
}
document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("contactform-submit").disabled = true;
})
