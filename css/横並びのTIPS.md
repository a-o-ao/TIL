# 横並びのTIPS

忘れがちなものをメモしておく。

## flex-boxを使うと、display: none; がきかなくなるので注意

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
    
