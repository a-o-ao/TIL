# JPAでネイティブSQLの書き方

## @Queryアノテーションでクエリー指定

nativeQuery = true を指定する。  

```
@Query(nativeQuery = true, value = "select T.col1, T.col2 from foo as T where T.col1 = :param ")
public List<Object[]> findFoo(@Param("param") String pParam);
```

## 外部ファイル化
