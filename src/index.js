class AutoFontSize{

  constructor(dom,width,height){
    this.dom = dom;
    this.nowSize = 12;
    this.maxSize = 200;
    this.width = width;
    this.height = height;
  }

  setDom(dom){
    this.dom = dom;
    return this;
  }

  getDom(){
    return this.dom;
  }

  setWidth(width){
    this.width = width;
    return this;
  }

  getWidth(){
    return this.width;
  }

  setHeight(height){
    this.height = height;
    return this;
  }

  getHeight(){
    return this.height;
  }

  fontSize(){
    const { domHtml, subDom } = { domHtml: this.dom.innerHTML, subDom: document.createElement("span") };
    document.getElementsByTagName("body")[0].appendChild(subDom);
    subDom.innerHTML = domHtml;
    for (; this.nowSize < this.maxSize; this.nowSize+=2) {
      subDom.style.fontSize = this.nowSize + 'px';
      const nowWidth = subDom.offsetWidth;
      const nowHeight = subDom.offsetHeight;
      if (nowWidth >= this.width || nowHeight >= this.height) {
        this.nowSize = this.nowSize - 2;
        this.dom.style.fontSize = this.nowSize + 'px';
        document.getElementsByTagName("body")[0].removeChild(subDom);
        break;
      }
    }
    return this;
  }

  getFontSize(){
    return this.nowSize;
  }
}

/*if(typeof exports === 'object' && typeof module !== 'undefined') {
  module.exports = AutoFontsize
} else {
  window.AutoFontsize=AutoFontsize;
}*/

window.AutoFontSize=AutoFontSize;