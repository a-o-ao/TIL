# JPQLでDB依存の関数を使う

function('関数名', arg1, arg2, ...)

```
@Query("select m.col1, m.col2 from hoge m left join m.piyo t "
			+ "where function('str_to_date', function('concat', m.col1,' ',m.col2), '%Y-%m-%d %H:%i:%s') > :currentDate "
			+ "and ...")
```
