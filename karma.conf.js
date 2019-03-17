module.exports = function (config) {
    config.set({
        frameworks: ["mocha", "karma-typescript"],
        files: [
            "test/**/*.ts"
        ],
        preprocessors: {
            "test/**/*.ts": "karma-typescript"
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["PhantomJS"],
        singleRun: true
    });
};