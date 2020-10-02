## RepositoryでnativeQueryを使って戻り値をDTOに詰める

```
List<Object[]> getHogeRaw();

default List<Fuga> getHoge() {
    return getHogeRaw().stream().map(HogeDto::new).collect(Collectors.toList());
}
```
