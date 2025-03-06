## @Queryで関数を使う

```
function('str_to_date', function('concat', m.date,' ',m.time), '%Y-%m-%d %H:%i:%s')
```
