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
        'detail': 'Nuxt.jsを利用してブログを制作し、Web系の技術的な記事を中心に更新しています。',
        'image': '../assets/img/cr-blog.jpg'
    },
    'aigo': {
        'title': 'アイゴ',
        'link': 'https://aigo.tokyo/',
        'detail': '日本視覚障害者囲碁協会様のWebサイト制作に、コーディング面でお手伝いさせていただきました。Wordpressを使用しています。',
        'image': '../assets/img/cr-aigo.jpg'
    },
	'maedamisaki': {
		'title': '真栄田岬',
        'link': 'https://maedamisaki.jp/',
        'detail': '観光地のWebサイト制作に、コーディング面でのお手伝いをさせていただきました。Wordpressを使用しています。',
        'image': '../assets/img/cr-maedamisaki.jpg'
	},
	'app': {
		'title': 'APPs by udcxx.',
        'link': 'https://app.udcxx.me/',
        'detail': '個人で制作した、AIツール・短縮URLツールなどを公開しています。',
        'image': '../assets/img/cr-app.jpg'
	}
}
const changeWorks = (toChange) => {
    document.querySelector('.works--image').src = worksItem[toChange].image;
    document.querySelector('.works--title').innerHTML = worksItem[toChange].title;
    document.querySelector('.works--link').innerHTML = worksItem[toChange].link;
    document.querySelector('.works--link').href = worksItem[toChange].link;
    document.querySelector('.works--detail').innerHTML = worksItem[toChange].detail;
}