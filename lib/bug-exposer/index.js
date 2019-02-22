'use strict';

module.exports = {
  name: require('./package').name,

  setupPreprocessorRegistry() {
    this.project.config() // <-- Does not break config
    this.project.config('development') // <-- Breaks config
  },

  isDevelopingAddon() {
    return true;
  }
};
