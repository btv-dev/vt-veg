module.exports = function(eleventyConfig) {

    // add assets
    eleventyConfig.addPassthroughCopy("assets");


    // add collections
    eleventyConfig.addCollection("categories", function(collectionApi) {
        // get all restaurants
        let restaurants = collectionApi.getFilteredByTag("restaurants");

        // ["fine dining", "fine dining", "casual"]
        let categoryNames = restaurants.map(r => r.data.category)

        // ["fine dining", "casual"]
        let categories = Array.from(new Set(categoryNames))

        let output = categories.map(cat => {
            let matches = restaurants.filter(r => r.data.category === cat)

            let obj = {
                name: cat,
                restaurants: matches
            }

            return obj
        })

        return output
    });



    // add filters
    eleventyConfig.addFilter("toTitleCase", function(str) {
        return str.replace(/\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );

    });


    const CleanCSS = require("clean-css");
    eleventyConfig.addFilter("cssmin", function(code) {
        // return original text if run in dev
        if (process.env.ELEVENTY_ENV.toLowerCase() == "dev") return code

        return new CleanCSS({}).minify(code).styles;
    });

    const Terser = require("terser");
    eleventyConfig.addFilter("jsmin", function(code) {
        // return original text if run in dev
        if (process.env.ELEVENTY_ENV.toLowerCase() == "dev") return code

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