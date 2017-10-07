(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define("smarttv-device-recognizer", [], factory);
  else if (typeof exports === 'object')
    exports["smarttv-device-recognizer"] = factory();
  else
    root["smarttv-device-recognizer"] = factory();
})(this, function () {
  return /******/ (function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/
      if (installedModules[moduleId])
      /******/      return installedModules[moduleId].exports;
      /******/
      /******/ 		// Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/      exports: {},
        /******/      id: moduleId,
        /******/      loaded: false
        /******/
      };
      /******/
      /******/ 		// Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ 		// Flag the module as loaded
      /******/
      module.loaded = true;
      /******/
      /******/ 		// Return the exports of the module
      /******/
      return module.exports;
      /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
  })
  /************************************************************************/
  /******/([
    /* 0 */
    /***/ function (module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _platforms = __webpack_require__(1);

      var _platforms2 = _interopRequireDefault(_platforms);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Recognizer = function () {
        function Recognizer() {
          _classCallCheck(this, Recognizer);
        }

        _createClass(Recognizer, null, [{
          key: 'setCurrentDevice',
          value: function setCurrentDevice() {
            var userAgent = navigator.userAgent;
            var currentDevice = {
              agentIndex: 'browserDefault',
              brandName: 'web',
              modelYear: '2017',
              displayName: 'Default Browser'
            };
            for (var platform = 0; platform < _platforms2.default.length; platform += 1) {
              if (userAgent.indexOf(_platforms2.default[platform].agentIndex) >= 0) {
                currentDevice = _platforms2.default[platform];
                break;
              }
            }
            return currentDevice;
          }
        }]);

        return Recognizer;
      }();

      exports.default = Recognizer;
      module.exports = exports['default'];

      /***/
    },
    /* 1 */
    /***/ function (module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       *
       * @type {[*]}
       */
      var platforms = [{
        agentIndex: 'Maple 5',
        brandName: 'samsung',
        modelYear: '2010',
        displayName: 'Samsung SmartTV Orsay | 2010'
      }, {
        agentIndex: 'Maple 6',
        brandName: 'samsung',
        modelYear: '2011',
        displayName: 'Samsung SmartTV Orsay | 2011'
      }, {
        agentIndex: 'SmartTV; Maple2012',
        brandName: 'samsung',
        modelYear: '2012',
        displayName: 'Samsung SmartTV Orsay | 2012'
      }, {
        agentIndex: 'SmartTV+2013; Maple2012',
        brandName: 'samsung',
        modelYear: '2013',
        displayName: 'Samsung SmartTV Orsay | 2013'
      }, {
        agentIndex: 'SmartTV+2014; Maple2012',
        brandName: 'samsung',
        modelYear: '2014',
        displayName: 'Samsung SmartTV Orsay | 2014'
      }, {
        agentIndex: 'SmartTV+2015; Maple2012',
        brandName: 'samsung',
        modelYear: '2015',
        displayName: 'Samsung SmartTV Orsay | 2015'
      }, {
        agentIndex: 'Maple',
        brandName: 'samsung',
        modelYear: 'undefined',
        displayName: 'Samsung SmartTV Orsay'
      }, {
        agentIndex: 'Tizen 2.3',
        brandName: 'tizen',
        modelYear: '2015',
        displayName: 'Samsung SmartTV Tizen | 2015'
      }, {
        agentIndex: 'Tizen 2.4.0',
        brandName: 'tizen',
        modelYear: '2016',
        displayName: 'Samsung SmartTV Tizen | 2016'
      }, {
        agentIndex: 'Tizen',
        brandName: 'tizen',
        modelYear: '2015',
        displayName: 'Samsung SmartTV Tizen | 2015'
      }, {
        agentIndex: 'VESTEL',
        brandName: 'vestel',
        modelYear: 'undefined',
        displayName: 'Vestel SmartTV'
      }, {
        agentIndex: 'VSTVB',
        brandName: 'vestel',
        modelYear: 'undefined',
        displayName: 'Vestel SmartTV'
      }, {
        agentIndex: 'LG NetCast.TV-2011',
        brandName: 'lg',
        modelYear: '2011',
        displayNme: 'LG SmartTV NetCast | 2011'
      }, {
        agentIndex: 'LG NetCast.TV-2012',
        brandName: 'lg',
        modelYear: '2012',
        displayName: 'LG SmartTV NetCast | 2012'
      }, {
        agentIndex: 'LG NetCast.TV',
        brandName: 'lg',
        modelYear: '2013',
        displayName: 'LG SmartTV NetCast | 2013'
      }, {
        agentIndex: 'LG SimpleSmart.TV-2016',
        brandName: 'lg',
        modelYear: '2016',
        displayName: 'LG SmartTV NetCast | 2016'
      }, {
        agentIndex: 'NETTV\/3',
        brandName: 'philips',
        modelYear: '2011',
        displayName: 'Philips SmartTV | 2011'
      }, {
        agentIndex: 'NETTV\/4\.0',
        brandName: 'philips',
        modelYear: '2012',
        displayName: 'Philips SmartTV | 2012'
      }, {
        agentIndex: 'NETTV\/',
        brandName: 'philips',
        modelYear: '2013',
        displayName: 'Philips SmartTV | 2013'
      }, {
        agentIndex: 'DuneHD\/',
        brandName: 'philips',
        modelYear: 'undefined',
        displayName: 'Philips SmartTV'
      }, {
        agentIndex: 'Viera\/1\.',
        brandName: 'viera',
        modelYear: '2012',
        displayName: 'Viera SmartTV | 2012'
      },
        /*  {
         agentIndex: 'SmartTvA\/',
         brandName: 'alliance',
         modelYear: 'generic',
         displayName: 'Alliance SmartTV | Generic'
         },
         {
         agentIndex: 'ToshibaTP\/',
         brandName: 'alliance',
         modelYear: 'toshiba',
         displayName: 'Alliance SmartTV | Toshiba'
         },*/
        {
          agentIndex: 'Viera\/3\.',
          brandName: 'viera',
          modelYear: '2013',
          displayName: 'Viera SmartTV | 2013'
        },
        /*  {
         'agentIndex': '537.41',
         'brandName': 'webos',
         'modelYear': '1.x',
         'displayName': 'LG WebOS SmartTV | 1.x'
         },
         {
         'agentIndex': '538.2',
         'brandName': 'webos',
         'modelYear': '2.x',
         'displayName': 'LG WebOS SmartTV | 2.x'
         },
         {
         'agentIndex': '537.36',
         'brandName': 'webos',
         'modelYear': '3.x',
         'displayName': 'LG WebOS SmartTV | 3.x'
         },*/
        {
          agentIndex: 'Web0S',
          brandName: 'webos',
          modelYear: 'undefined',
          displayName: 'LG WebOS SmartTV'
        }, {
          agentIndex: 'Arcelik',
          brandName: 'arcelik',
          modelYear: 'undefined',
          displayName: 'Arçelik Group Smart TV'
        }, {
          agentIndex: 'Hisense',
          brandName: 'hisense',
          modelYear: 'undefined',
          displayName: 'Hisense SmartTV'
        }];

      exports.default = platforms;
      module.exports = exports['default'];

      /***/
    }
    /******/])
});
;
//# sourceMappingURL=smarttv-device-recognizer.js.map
