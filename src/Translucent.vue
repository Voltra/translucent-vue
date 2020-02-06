<template>
	<component :is="tag" :class="className" ref="wrapper">
		<slot/>
	</component>
</template>

<script>
    import VueTypes from "vue-types"
    import { Translucent } from "translucent"

    export default {
        name: "translucent",
        props: {
			container: VueTypes.instanceOf(HTMLElement).isRequired,
            tag: VueTypes.string.def("div"),

            blur: VueTypes.integer.def(10),
            theme: VueTypes.string.def("white"),
            shadow: VueTypes.bool.def(true),
		},
		computed: {
			className(){
				return `translucent__wrapper theme--${this.theme}`;
			}
		},
        mounted(){
            this.$translucent = new Translucent(this.$refs.wrapper, {
                bgElement: this.container,
                filterValue: this.blur,
                cardColor: this.theme,
                shadow: this.shadow,
            });
        },
        beforeDestroy(){
            this.$translucent.destroy();
        },
    }
</script>