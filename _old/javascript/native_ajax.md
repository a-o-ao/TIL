### GET

```
var req = new XMLHttpRequest();
req.onreadystatechange = function() {
  var result = document.getElementById('result');
  if (req.readyState == 4) { // 通信の完了時
    if (req.status == 200) { // 通信の成功時
      result.innerHTML = req.responseText;
    }
  }else{
    result.innerHTML = "通信中...";
  }
}
req.open('GET', 'helloAjax.php?name=' + encodeURIComponent(document.fm.name.value), true);
req.send(null);
```

### POST

```
req.open('POST', 'helloAjax.php', true);
req.setRequestHeader('content-type',
  'application/x-www-form-urlencoded;charset=UTF-8');
req.send('name=' + encodeURIComponent(document.fm.name.value));
```
