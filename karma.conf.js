// Karma configuration
// Generated on Sat Nov 24 2018 21:24:57 GMT+0800 (China Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'karma-typescript'],


    // list of files / patterns to load in the browser
    /**
     * Add test files
     * and tested files
     */
    files: [
      "./lib/**/*.ts",
      // "./lib/index.ts",
      // "./test/forward_ref_spec.ts",
      // "./test/injector_spec.ts",
      // "./test/reflective_injector_spec.ts",
      // "./test/reflective_key_spec.ts"
      "./test/**/*.ts",
    ],


    // list of files / patterns to exclude
    exclude: [

    ],


    /**
     * Configuration for karma-typescript
     *
     * @link https://github.com/monounity/karma-typescript/blob/master/README.md#advanced-configuration
     * @link https://github.com/monounity/karma-typescript/blob/master/examples/typescript-latest/karma.conf.js
     */
    karmaTypescriptConfig: {
      tsconfig: './tsconfig-karma.json',
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "./lib/**/*.ts": ["karma-typescript"],
      // "./lib/index.ts": ["karma-typescript"],
      "./test/**/*.ts": ["karma-typescript"],
    },

    // plugins: [
    //   require('karma-jasmine'),
    //   require('karma-chrome-launcher'),
    // ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
