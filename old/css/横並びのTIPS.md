# 横並びのTIPS

忘れがちなものをメモしておく。

* display: inline-block; を使う
* display: flex; を使う
* displayを使うと、display: none; がきかなくなるので注意
* float: left; を使う

### flex-boxを使うとjustify-contentが使える

```
    .yokonarabi-oya {
      display: flex;
      justify-content: space-between;
    }
    .yokonarabi-ko {
      width: 100%;
      flex-wrap: wrap;
    }
```
    
