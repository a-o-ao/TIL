## Xpathの要素指定

#### input type="file"

> /input[@type='file']

#### テキストから

> //ul[@id="main-menu"]/li/a[text()="JOB"]

### 隣の要素

> div[@id="hoge"]/following-sibling::div

> div[@id="hoge"]/preceding-sibling::div


### contains のand,or条件

100または300を含むsrc
> //td[contains(@src,'100') or contains(@src, '300')]

100か300以外を含むsrc
> //td[not(contains(@src,'100') or contains(@src, '300'))]

mainと300を含む
> //img[contains(@src, 'main') and contains(@src, '300')]

