## 同じパラメータ名でrequestする.md

以下のようなことをやりたい場合がある。

```
<input type=text name=aaa>
<input type=text name=aaa>
```

この場合、サーバーにPOSTされるのは２番目だけ。

なので、以下のようにするとよい。

```
<input type=text name=aaa[]>
<input type=text name=aaa[]>
```

ちなみに、サーバーにPOSTされる変数としてはaaaとなるみたい
