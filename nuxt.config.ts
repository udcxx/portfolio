// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{rel: 'preconnect', href: 'https://fonts.googleapis.com'},
				{rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
				{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap'},
				{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&family=Noto+Color+Emoji&display=swap'}
			]
		}
	},
	devtools: { enabled: true },
	css: ['~/assets/scss/_reset.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/scss/_vars.scss" as *;'
				}
			}
		}
	}
})
