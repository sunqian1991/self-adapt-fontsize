# self-adapt-fontsize
## 介绍

根据给定的宽和高来设置可适应此宽高的最大字号，以实现字号自适应

## 安装
### npm
```shell
npm install self-adapt-fontsize --save
```

### 本地引用
```html
<script src="./dist/index.js" type="text/javascript"></script>
```

## 使用

```javascript
<script src="./dist/index.js" type="text/javascript"></script>

...

var safs = SelfAdaptFontSize.getInstance();
safs.fontSize(document.getElementById("test1"),600,60);
safs.fontSize(document.getElementById("test2"),500,50);
safs.fontSize(document.getElementById("test3"),400,40);

...
<div id="test1" style="width:600px; height:60px;">this is a test.</div>
<div id="test2" style="width:400px; height:40px;">this is a test. this is a test.</div>
<div id="test3" style="width:300px; height:30px;">this is a test. this is a test. this is a test. this is a test.</div>
```

*******

```javascript
import SelfAdaptFontSize from 'self-adapt-fontsize';

...

const safs = SelfAdaptFontSize.getInstance();
safs.fontSize(document.getElementById('test1'), 600, 60);
safs.fontSize(document.getElementById('test2'), 400, 40);
safs.fontSize(document.getElementById('test3'), 300, 30);

...

<div id="test1" style="width:600px; height:60px;">this is a test.</div>
<div id="test2" style="width:400px; height:40px;">this is a test. this is a test.</div>
<div id="test3" style="width:300px; height:30px;">this is a test. this is a test. this is a test. this is a test.</div>
```
