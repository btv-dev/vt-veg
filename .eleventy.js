module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");


    const CleanCSS = require("clean-css");
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
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