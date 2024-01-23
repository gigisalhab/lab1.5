module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy({"src/base.css": "base.css"});

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
