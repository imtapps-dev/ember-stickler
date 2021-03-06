/* jshint node: true */
// jscs:disable
/* globals blanket, module */

var options = {
  modulePrefix: 'ember-stickler',
  filter: '//.*ember-stickler/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    autostart: true,
    lcovOptions: {
      outputFile: 'lcov.info'
    }
  }
};

if (typeof exports === 'undefined') {
  blanket.options(options);

} else {
  module.exports = options;
}
