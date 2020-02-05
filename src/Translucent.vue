<template>
    <component :is="bgTag" :class="bgClass">
        <component :is="wrapperTag" :class="wrapperClass" :ref="wrapper">
            <slot/>
        </component>
    </component>
</template>

<script>
    import VueTypes from "vue-types"
    import { Translucent } from "translucent"

    export default {
        name: "translucent",
        props: {
            bgClass: VueTypes.string.def("translucent"),
            wrapperClass: VueTypes.string.def("translucent__wrapper"),
            bgTag: VueTypes.string.def("div"),
            wrapperTag: VueTypes.string.def("div"),

            filterValue: VueTypes.integer.def(10),
            cardColor: VueTypes.string.def("white"),
            shadow: VueTypes.bool.def(true),
        },
        mounted(){
            this.$translucent = new Translucent(this.$refs.wrapper, {
                bgElement: `.${this.bgClass}`,
                filterValue: this.filterValue,
                cardColor: this.cardColor,
                shadow: this.shadow,
            });
        },
        beforeDestroy(){
            this.$translucent.destroy();
        },
    }
</script>

<style lang="scss" scoped>
</style>