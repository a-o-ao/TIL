## thymeleafにレイアウトを適用する方法

* layout.html

コンテンツ差し込み場所にdata-layout-fragmentを指定する。

```
<div data-layout-fragment="content"></div>
```

* content.html

```
<html xmlns="http://www.w3.org/1999/xhtml" data-xmlns-th="http://www.thymeleaf.org" data-xmlns-layout="http://www.ultraq.net.nz/thymeleaf/layout"
	data-layout-decorator="layout/layoutEntry" data-th-lang-xmllang="${#locale.language}">

  <body>

    <div data-layout-fragment="content">
    
      <p>content here</p>
      
    </div>

  </body>
  
</html>
```
