### fadein

```
var begin = new Date() - 0;
var myMain = document.getElementById("main");
myMain.style.opacity = 0;
var myTime = 600;
var id = setInterval(function() {
    var current = new Date() - begin;
    if (current > myTime){
        clearInterval(id);
        current = myTime;
    }
    myMain.style.opacity = current / myTime;
}, 10);
```
