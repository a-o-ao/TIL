## シンプルなfor文の書き方

* 誕生日など

<option th:each="i : ${#numbers.sequence(1, 12)}" th:value="${i}" th:text="${i}"></option>
