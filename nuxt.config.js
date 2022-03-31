export default {
	head: {
		title: 're-app',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	server: {
		port: 3006,
		host: '0.0.0.0',
		timing: false
	},
	css: ['element-ui/lib/theme-chalk/index.css', '@/assets/fonts/Montserrat/stylesheet.css', '@/assets/base.scss'],

	plugins: [
		{ src: '@/plugins/element-ui', ssr: true },
		{ src: '@/plugins/vuelidate.js', ssr: true }
	],

	components: true,

	buildModules: ['@nuxtjs/eslint-module'],

	modules: [],

	build: {
		transpile: [/^element-ui/],
		loaders: {
			sass: {
				implementation: require('sass')
			},
			scss: {
				implementation: require('sass')
			}
		}
	}
};
