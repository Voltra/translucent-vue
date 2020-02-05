const { error } = require("dotenv").config();
const mode = process.env.NODE_ENV || "production";
const dev = mode === "development";

if(!!error)
	throw new ReferenceError("Do not forget to create your .env file");

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
        ],
    };
};