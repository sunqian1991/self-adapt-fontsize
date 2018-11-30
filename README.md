# self-adapt-fontsize
## Introduce

According to the given width and height, the maximum font size that can adapt to the width and height will be set in order to realize the self-adapt-fontsize.

## Install
#### npm
```shell
npm install self-adapt-fontsize --save
```

#### local reference
```html
<script src="./dist/index.js" type="text/javascript"></script>
```

## Usage
the following uses of this plugin are both right. 

```javascript
<script src="./dist/index.js" type="text/javascript"></script>

...

var safs = SelfAdaptFontSize.getInstance();
safs.fontSize(document.getElementById("test1"),600,60);
safs.fontSize(document.getElementById("test2"),400,40);
safs.fontSize(document.getElementById("test3"),300,30);

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
