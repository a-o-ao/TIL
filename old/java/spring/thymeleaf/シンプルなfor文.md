## シンプルなfor文の書き方

* 誕生日など

```
<option th:each="i : ${#numbers.sequence(1, 12)}" th:value="${i}" th:text="${i}"></option>
```

* 逆順

```
<option th:each="i : ${#numbers.sequence(12, 1, -1)}" th:value="${i}" th:text="${i}"></option>
```

今のところチュートリアルに書いてなかった。
