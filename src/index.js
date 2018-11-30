class SelfAdaptFontSize{

  constructor() {
    this.maxSize = 200;
  }

  static getInstance() {
    if(!this.instance){
      this.instance = new SelfAdaptFontSize();
    }
    return this.instance;
  }

  setDom(dom) {
    this.dom = dom;
    return this;
  }

  getDom() {
    return this.dom;
  }

  setWidth(width) {
    this.width = width;
    return this;
  }

  getWidth() {
    return this.width;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }

  getHeight() {
    return this.height;
  }

  resetNowSize() {
    this.nowSize = 12;
  }

  fontSize(dom, width, height) {
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

    const { domHtml, subDom } = { domHtml: this.dom.innerHTML, subDom: document.createElement("span") };
    document.getElementsByTagName("body")[0].appendChild(subDom);
    subDom.innerHTML = domHtml;
    subDom.style.position = 'absolute';
    subDom.style.opacity = '0';
    subDom.style.padding = '0px';
    subDom.style.margin = '0px';
    for (; this.nowSize < this.maxSize; this.nowSize+=2) {
      subDom.style.fontSize = this.nowSize + 'px';
      const nowWidth = subDom.offsetWidth;
      const nowHeight = subDom.offsetHeight;
      if (nowWidth > this.width || nowHeight > this.height) {
        this.nowSize = this.nowSize - 2;
        this.dom.style.fontSize = this.nowSize + 'px';
        document.getElementsByTagName("body")[0].removeChild(subDom);
        break;
      }
    }
    return this;
  }

  getFontSize() {
    return this.nowSize;
  }
}

if(typeof exports === 'object' && typeof module !== 'undefined') {
  module.exports = SelfAdaptFontSize
} else {
  window.SelfAdaptFontSize=SelfAdaptFontSize;
}
