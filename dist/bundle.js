(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.main1 = factory());
}(this, (function () { 'use strict';

  var version = "1.0.0";

  console.log("A simple ES2015 template string!");

  function main$1 () {
    console.log("version " + version);
  }

  return main$1;

})));
