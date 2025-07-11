# JPAでネイティブSQLの書き方

## @Queryアノテーションでクエリー指定

nativeQuery = true を指定する。  

リポジトリ

```
@Query(nativeQuery = true, value = "select T.col1, T.col2 from foo as T where T.col1 = :param ")
public List<Object[]> findFooRaw(@Param("param") String pParam);

default List<HogeDto> findFoo() {
    return findFooRaw().stream().map(HogeDto::new).collect(Collectors.toList());
}
```

DTO

```
@Data
@AllArgsConstructor
public class HogeDto {
    public HogeDto(Object[] objects) {
        this(
                objects[0].toString()
            );
    }
}
```

