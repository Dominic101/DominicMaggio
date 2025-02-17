const eleventySass = require("@grimlink/eleventy-plugin-sass");
const sass = require("sass");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass, { sass });
    return {
        pathPrefix: "/DominicMaggio",
        dir: {
            includes: "_templates",
            output: "_site",
        },
    };
};