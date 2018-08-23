(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.main2 = factory());
}(this, (function () { 'use strict';

  var name = "my-rollup-project";
  var version = "1.0.0";

  function main2 () {
    console.log("name " + name);
    console.log("version " + version);
  }

  return main2;

})));
