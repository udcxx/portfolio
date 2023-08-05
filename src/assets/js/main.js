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



// Change Works
const worksItem = {
    'blog': {
        'title': '無趣味の戯言（ブログ）',
        'link': 'https://blog.udcxx.me/',
        'detail': '紹介テキストです。にほんご日本語ニホンゴNihongoにほんご日本語ニホンゴNihongoにほんご日本語ニホンゴNihongoにほんご日本語ニホンゴNihongo',
        'image': '../assets/img/cr-blog.jpg'
    },
    'aigo': {
        'title': 'アイゴ',
        'link': 'https://',
        'detail': 'わいわいわいわー',
        'image': '../assets/img/cr-aigo.jpg'
    }
}
const changeWorks = (toChange) => {
    document.querySelector('.works--image').src = worksItem[toChange].image;
    document.querySelector('.works--title').innerHTML = worksItem[toChange].title;
    document.querySelector('.works--link').innerHTML = worksItem[toChange].link;
    document.querySelector('.works--link').href = worksItem[toChange].link;
    document.querySelector('.works--detail').innerHTML = worksItem[toChange].detail;
}