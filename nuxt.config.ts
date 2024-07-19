// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4,
	},

	app: {
		// baseURL: '/portfolio/', // Dev環境用
		head: {
			title: 'udcxx Portfolio',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'だいちゃん / udcxx がこれまでに制作したWebページや、経歴などを紹介するポートフォリオサイトです。' },
				{ hid: 'og:site_name', property: 'og:site_name', content: 'udcxx Portfolio' },
				// { name: 'og:image', content: '/images/blog-card.png'},
				{ name: 'twitter:card', content: 'summary_large_image' },
			],
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&family=Noto+Color+Emoji&display=swap' }
			]
		}
	},

	devtools: { enabled: true },

	css: [
		'~/assets/scss/reset.scss',
		'~/assets/scss/classes.scss'
	],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/scss/_vars.scss" as *;'
				}
			}
		}
	},

	compatibilityDate: '2024-07-16'
})