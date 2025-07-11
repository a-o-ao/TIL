### ダンプしたSQLからリストアするときに外部キー制約でうまくいかない場合は以下を設定する。

```
SET FOREIGN_KEY_CHECKS=0;
```

念のため最後に以下をやっておく。

```
SET FOREIGN_KEY_CHECKS=1;
```
