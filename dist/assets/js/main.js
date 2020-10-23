// FV Text Animation
let animationSize = 100;

let styles; let i; let randomX; let randomY; let keyframes;

document.addEventListener("DOMContentLoaded", function () {
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



// Works
document.addEventListener("DOMContentLoaded", function () {
	const btns = document.querySelectorAll('.list-content img');
	btns.forEach((btn) => {
		btn.addEventListener('click', function() {
			document.getElementById('show_box').style.opacity = 0;
			const h4 = this.dataset.h4;
			const h3 = this.dataset.h3;
			const p = this.dataset.p;
			window.setTimeout(function() {
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
