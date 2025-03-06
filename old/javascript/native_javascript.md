### 要素取得

```
IDから
document.getElementById()

タグ名から（a、li、spanなど）
document.getElementsByTagName(), element.getElementsByTagName()

クラス名から
document.getElementsByClassName(), element.getElementsByClassName()

name属性から
document.getElementsByName()

cssセレクタから
document.querySelector(), element.querySelector()
例）document.querySelector('.foo')　->　class='foo'を取得

cssセレクタから（複数）
document.querySelectorAll(), element.querySelectorAll()
```

### 複数ノードの扱い方

```
var forEach = Array.prototype.forEach;

var div = document.getElementsByTagName('div');
forEach.call(div, function (elem) {
  elem.style.backgroundColor = '#f00';
});

var section = document.querySelectorAll('section');
forEach.call(section, function (elem) {
  elem.classList.add('fooSection');
});
```

### styleを指定する

`
document.getElementById("main").style.color = "blue";
`

### class関連

```
document.getElementById("main").classList.add("test")
document.getElementById("main").classList.contains("test")
document.getElementById("main").classList.remove("test")
document.getElementById("main").classList.toggle("test")
```

### Clickイベント

```
const button = document.querySelector('.foo');
button.addEventListener('click', event => {
	button.innerHTML = `Click count: ${event.detail}`;
});
```

