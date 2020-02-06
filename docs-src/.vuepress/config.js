module.exports = {
    // base: "/translucent-vue/",
    dest: "./docs",
    themeConfig: {
        smoothScroll: true,
        plugins: [
            ["clean-urls", true]
        ],
        sidebar: [
            '/',
            /* {
                title: "Components",
                path: "/components",
                children: [
                    "/components/GdprManager",
                    "/components/GdprGroup",
                    "/components/GdprGuard"
                ],
                prev: "/plugin",
                next: "/components/GdprManager",
            }, */
        ],
    },
};