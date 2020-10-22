// FV Text Animation
let animationSize = 50;

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
			txts[i].style.animation = "move" + i + " 2s 5s both";
		}
	}
});
