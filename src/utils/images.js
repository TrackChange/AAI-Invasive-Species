const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt) {
        const regex = /(")/g;
        let metadata = await Image(src, {
                widths: [null],
                formats: ["png"],
                outputDir: "./dist/assets/images",
                urlPath: "assets/images",
                sharpPngOptions: {
                        progressive: true,
                        palette: true,
                },
                filenameFormat: function (id, srcc, width, format, options) {
                        let time = new Date().getTime();
                        return `bwb_${time}.${format}`;
                },
        });

        let imageAttributes = {
                alt: alt ? alt.replace(regex, "'") : "",
                loading: "lazy",
                decoding: "async",
        };
        return Image.generateHTML(metadata, imageAttributes);
}

module.exports = imageShortcode;
