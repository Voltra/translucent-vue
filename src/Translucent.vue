<template>
	<component :is="tag" class="translucent__wrapper" ref="wrapper">
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

            filter: VueTypes.integer.def(10),
            mode: VueTypes.string.def("white"),
            shadow: VueTypes.bool.def(true),
        },
        mounted(){
            this.$translucent = new Translucent(this.$refs.wrapper, {
                bgElement: this.container,
                filterValue: this.filter,
                cardColor: this.mode,
                shadow: this.shadow,
            });
        },
        beforeDestroy(){
            this.$translucent.destroy();
        },
    }
</script>