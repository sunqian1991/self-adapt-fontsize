!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e){window.AutoFontSize=class{constructor(t,e,i){this.dom=t,this.nowSize=12,this.maxSize=200,this.width=e,this.height=i}setDom(t){return this.dom=t,this}getDom(){return this.dom}setWidth(t){return this.width=t,this}getWidth(){return this.width}setHeight(t){return this.height=t,this}getHeight(){return this.height}fontSize(){const{domHtml:t,subDom:e}={domHtml:this.dom.innerHTML,subDom:document.createElement("span")};for(document.getElementsByTagName("body")[0].appendChild(e),e.innerHTML=t;this.nowSize<this.maxSize;this.nowSize+=2){e.style.fontSize=this.nowSize+"px";const t=e.offsetWidth,i=e.offsetHeight;if(t>=this.width||i>=this.height){this.nowSize=this.nowSize-2,this.dom.style.fontSize=this.nowSize+"px",document.getElementsByTagName("body")[0].removeChild(e);break}}return this}getFontSize(){return this.nowSize}}}]);