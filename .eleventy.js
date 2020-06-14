module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");


    const CleanCSS = require("clean-css");
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    const Terser = require("terser");
    eleventyConfig.addFilter("jsmin", function(code) {
        let minified = Terser.minify(code);
        if (minified.error) {
            console.log("Terser error: ", minified.error);
            return code;
        }

        return minified.code;
    });



    return {
        dir: {
            "layouts": "_layouts"
        },

        // By default markdown files are pre-processing with liquid template engine
        // https://www.11ty.io/docs/config/#default-template-engine-for-markdown-files
        markdownTemplateEngine: "njk",
    };
};