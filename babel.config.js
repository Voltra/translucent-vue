const _ = require("dotenv").config();
const mode = process.env.NODE_ENV || "production";
const dev = mode === "development";

module.exports = api => {
    api.cache(!dev);


    return {
        presets: [
            ["@babel/preset-env", {
                targets: "> 0.25%, not dead",
                modules: false, //"umd",
                // useBuiltIns: false,
            }]
        ],
        plugins: [
            "babel-plugin-transform-function-bind", // ::this.method
        ],
    };
};