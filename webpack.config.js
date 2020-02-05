////////////////////////////////////////////////////////////////////////////////////////////////////
//// IMPORTS
////////////////////////////////////////////////////////////////////////////////////////////////////
const webpack = require("webpack");
const { resolve } = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const envLoaded = require("dotenv").config();

const mode = process.env.NODE_ENV || "production";
const dev = (mode === "development");
const config = {
    resolve: {
        alias: {},
        extensions: []
    },
    target: "web",
    entry: {},
    output: {},
    module: {
        rules: []
    },
    plugins: [],
    mode,
    stats: {
        warnings: false,
    },
};

const path = src => resolve(__dirname, src);
const styleLoaders = ["style-loader", "css-loader"];
const sassLoaders = [...styleLoaders, "sass-loader"];
const libraries = /(node_module|bower_component)s/gi;



////////////////////////////////////////////////////////////////////////////////////////////////////
//// TARGET
////////////////////////////////////////////////////////////////////////////////////////////////////
config.target = "web";

config.library = "TranslucentVue";
config.libraryTarget = "umd";

config.resolve.extensions = [
    "js",
    "vue",
    "scss",
    "css"
].map(ext => `.${ext}`);



////////////////////////////////////////////////////////////////////////////////////////////////////
//// TARGET
////////////////////////////////////////////////////////////////////////////////////////////////////
config.entry["index"] = "./src/index.js";



////////////////////////////////////////////////////////////////////////////////////////////////////
//// OUTPUTS
////////////////////////////////////////////////////////////////////////////////////////////////////
config.output["path"] = path("dist");
config.output["filename"] = "[name].bundle";



////////////////////////////////////////////////////////////////////////////////////////////////////
//// DEV TOOLS
////////////////////////////////////////////////////////////////////////////////////////////////////
config.devtool = dev ? "cheap-module-eval-source-map" : false;



////////////////////////////////////////////////////////////////////////////////////////////////////
//// MODULES/LOADERS
////////////////////////////////////////////////////////////////////////////////////////////////////
config.module.rules.push({
    test: /\.js$/i,
    exclude: libraries,
    use: [
        "babel-loader"
    ]
});

config.module.rules.push({
    test: /\.css$/i,
    use: styleLoaders
});

config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: sassLoaders
});

const vueStyleLoaders = `vue-style-loader${sassLoaders.map(e=>`!${e}`).join("")}`;
config.module.rules.push({
    test: /\.vue$/i,
    loader: "vue-loader",
    options: {
        loaders: {
            css: vueStyleLoaders,
            scss: vueStyleLoaders,
            sass: vueStyleLoaders,
        }
    }
});



////////////////////////////////////////////////////////////////////////////////////////////////////
//// PLUGINS
////////////////////////////////////////////////////////////////////////////////////////////////////
config.plugins.push(new VueLoaderPlugin());