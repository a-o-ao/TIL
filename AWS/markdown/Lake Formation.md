# AWS Lake Formation

**AWS Lake Formation** は、  
**S3 上にセキュアなデータレイクをすばやく構築・管理するためのマネージドサービス**です。

---

### 🔧 主な機能

| 機能 | 説明 |
|------|------|
| **データ収集** | RDS、S3、Redshift、オンプレなどからデータを一括取り込み |
| **カタログ化（Glue連携）** | データを自動でスキャン＆カタログ化（スキーマ管理） |
| **アクセス制御** | テーブル/列レベルでアクセス制御が可能（IAM + 独自ポリシー） |
| **データ暗号化** | S3上のデータをKMSで暗号化しセキュアに保存 |
| **統合ビュー** | Redshift、Athena、EMR などから同じデータカタログを参照可能 |

---

### こんなときに使う

- 大量の異種データを一元管理したい
- セキュリティや権限を細かく制御しながら分析したい
- Athena、Redshift Spectrum、EMRなどと統合的に使いたい

---

### 関連サービスとの違い

| サービス | 主な役割 |
|----------|----------|
| **Glue** | ETLやカタログ作成に強い（Lake Formationの裏側でも使われる） |
| **Athena** | データレイク上のクエリ実行 |
| **Lake Formation** | GlueやS3のデータを**統合・管理・保護**する上位レイヤー |


## AWS Lake Formation × 他サービスの連携可能性

### AWS Glue Sensitive Data Detection

#### 連携内容
- Glue Sensitive Data Detection は **Glueジョブの中で機密データ（例: 氏名、住所、クレカ番号など）を自動検出**する機能。
- この機能は **Lake Formation が管理するS3データにも適用可能**。
- 検出結果を使って：
  - Lake Formationで **列レベルのアクセス制御** を強化したり、
  - 機密列を **マスキング・削除・トークナイズ** する処理をETLで組み込むことが可能。

#### 活用イメージ
- GlueジョブでPIIを検出 → 機密列のみアクセスを制限（Lake Formationで制御）
- データ共有時にSensitive Dataを除外する自動処理を組み込む

---

### AWS Data Exchange

#### 連携内容
- AWS Data Exchange は、**データプロバイダーがサードパーティデータを提供・販売するためのプラットフォーム**。
- 現時点で **Lake Formationと直接統合されているわけではない** が、以下のように **組み合わせて活用可能**：

#### 活用イメージ
- **Data Exchange で取得したデータをS3に配置** → **Lake Formationで制御・可視化**
- 機密性の高いData Exchangeデータに **Glue Sensitive Detectionをかけて自動分類**
- Lake Formation の **アクセス権限管理機能** を使って、利用部門ごとのアクセス制限を設定

---

### 組み合わせ活用のベストプラクティス例

1. **外部データ取得**（AWS Data Exchange）
2. **S3に格納 → Glueでカタログ化**
3. **Glue Sensitive DetectionでPII検出**
4. **Lake Formationでデータアクセスを制限**
5. **Athena や QuickSight で分析**（制御された範囲で）

