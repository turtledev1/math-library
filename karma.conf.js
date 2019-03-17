module.exports = function (config) {
    config.set({
        frameworks: ["mocha", "karma-typescript"],
        files: [
            "src/**/*.ts",
            "test/**/*.ts"
        ],
        preprocessors: {
            "src/**/*.ts": "karma-typescript",
            "test/**/*.ts": "karma-typescript"
        },
        karmaTypescriptConfig: {
            coverageOptions: {
                exclude: /test/
            }
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["PhantomJS"],
        singleRun: true
    });
};