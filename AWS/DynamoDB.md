# Amazon DynamoDB

## オンデマンドモードとプロビジョニングモード

| モード | 説明 |
| --- | --- |
| オンデマンドモード | 必要に応じてリソースを自動的に追加。<br>トラフィック量の予測が困難な場合にリクエストの実績数に応じて課金。<br>Read/Write処理を自動的にスケールアップ/ダウン。 |
| プロビジョニングモード | 事前にリソースを割り当てて予算を管理 |

### キャパシティユニット

- WCU(Write Capacity Unit)
- RCU(Read Capacity Unit)

## DynamoDB トランザクション機能

- Put — `PutItem` オペレーションを開始し、条件付きで、または条件をまったく指定せずに、新しい項目を作成するか、古い項目を新しい項目に置き換えます。
- Update — `UpdateItem` オペレーションを開始し、既存の項目の属性を編集するか、まだ存在しない場合は新しい項目をテーブルに追加します。条件付きまたは条件なしで既存の項目で属性を追加、削除、更新するには、このアクションを使用します。
- Delete — `DeleteItem` オペレーションを開始し、プライマリキーにより識別される 1 つの項目をテーブルで削除します。
- `ConditionCheck` — 項目が存在することを確認するか、項目の特定の属性の条件を確認します。

## DynamoDB ストリーム

DynamoDBストリーム はDynamoDB テーブル内の項目レベルの変更に関するシーケンスを時間順にキャプチャして保存する機能です。DynamoDBストリームによってDynamoDBテーブルに対するデータ変更が発生すると、Lambda関数などにリアルタイムに変更点をデータ連携するような構成が可能となります。

これによって、DynamoDBテーブルにデータが保存された際に、そのストリームデータを他のアプリケーションに共有する仕組みをリアルタイムに実現することができます。

