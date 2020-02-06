Vue.use(TranslucentVue.Plugin);

const { Translucent } = TranslucentVue;

const $vm = new Vue({
	el: "#app",
	components: {
		Translucent,
	},
});