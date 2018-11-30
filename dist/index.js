"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelfAdaptFontSize = function () {
  function SelfAdaptFontSize() {
    _classCallCheck(this, SelfAdaptFontSize);

    this.maxSize = 200;
  }

  _createClass(SelfAdaptFontSize, [{
    key: "setDom",
    value: function setDom(dom) {
      this.dom = dom;
      return this;
    }
  }, {
    key: "getDom",
    value: function getDom() {
      return this.dom;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.width = width;
      return this;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.height = height;
      return this;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "resetNowSize",
    value: function resetNowSize() {
      this.nowSize = 12;
    }
  }, {
    key: "fontSize",
    value: function fontSize(dom, width, height) {
      // if params is not undefined, reset all the params
      if (dom) {
        this.setDom(dom);
      }

      if (width) {
        this.setWidth(width);
      }

      if (height) {
        this.setHeight(height);
      }

      // reset the current font size
      this.resetNowSize();

      var _domHtml$subDom = { domHtml: this.dom.innerHTML, subDom: document.createElement("span") },
          domHtml = _domHtml$subDom.domHtml,
          subDom = _domHtml$subDom.subDom;

      document.getElementsByTagName("body")[0].appendChild(subDom);
      subDom.innerHTML = domHtml;
      subDom.style.position = 'absolute';
      subDom.style.opacity = '0';
      subDom.style.padding = '0px';
      subDom.style.margin = '0px';
      for (; this.nowSize < this.maxSize; this.nowSize += 2) {
        subDom.style.fontSize = this.nowSize + 'px';
        var nowWidth = subDom.offsetWidth;
        var nowHeight = subDom.offsetHeight;
        if (nowWidth > this.width || nowHeight > this.height) {
          this.nowSize = this.nowSize - 2;
          this.dom.style.fontSize = this.nowSize + 'px';
          document.getElementsByTagName("body")[0].removeChild(subDom);
          break;
        }
      }
      return this;
    }
  }, {
    key: "getFontSize",
    value: function getFontSize() {
      return this.nowSize;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new SelfAdaptFontSize();
      }
      return this.instance;
    }
  }]);

  return SelfAdaptFontSize;
}();

if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
  module.exports = SelfAdaptFontSize;
} else {
  window.SelfAdaptFontSize = SelfAdaptFontSize;
}