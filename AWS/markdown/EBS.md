# Amazon EBS

https://docs.aws.amazon.com/ja_jp/ebs/latest/userguide/what-is-ebs.html

## Amazon DLM

Amazon DLM (Data Lifecycle Manager) とは、Amazon EBSボリュームのバックアップ管理を自動化するサービスです。

スナップショットの作成や削除を自動化することで、バックアップポリシーを効率的に管理でき、データ保護とコスト管理を簡単に実現できます。

## ボリュームタイプ

| ボリュームタイプ              | 用途                                    | 主な特徴                                         | 最大IOPS             | 最大スループット   | 最大容量        |
|-----------------------------|---------------------------------------|-------------------------------------------------|----------------------|-------------------|-----------------|
| **gp3 (汎用SSD)**           | 一般的な用途（Webサーバー、Dev/QAなど）  | バランスの取れたパフォーマンス、コスト効率が高い   | 16,000 IOPS          | 1,000 MB/秒       | 16 TiB          |
| **io2 (プロビジョンドIOPS)** | 高IOPSが必要なデータベースやトランザクション処理 | 高耐久性、高IOPS、低遅延                        | 64,000 IOPS          | 1,000 MB/秒       | 16 TiB          |
| **io2 Block Express**       | 極高パフォーマンスが必要なミッションクリティカルなワークロード | 高IOPS、超高スループット、最大64 TiBの容量、高い耐久性 | 256,000 IOPS         | 4,000 MB/秒       | 64 TiB          |
| **st1 (スループット最適化HDD)** | 大規模データストレージ、ログ処理、データウェアハウスなど      | 高スループット、コスト効率が良い<br>シーケンシャルにアクセスする大容量データを格納する        | 1,000 IOPS           | 500 MB/秒         | 16 TiB          |
| **sc1 (Cold HDD)**          | アーカイブ、バックアップなど            | 低コスト、アクセス頻度が少ないデータ用            | 250 IOPS             | 250 MB/秒         | 16 TiB          |


## RAID構成

RAID構成とは、複数のディスクを組み合わせて、データの冗長性、パフォーマンス、容量の最適化を目的とする技術です。

| 項目                   | RAID 0                                 | RAID 1                                 |
|------------------------|-----------------------------------------|-----------------------------------------|
| 構成方法               | ストライピング（データを分割して書き込む） | ミラーリング（データを複製して書き込む） |
| データ保護性能         | なし（1台でも故障すると全データ消失）    | 高い（1台が故障しても運用継続可能）      |
| パフォーマンス（読み込み） | 高速（複数ディスクから同時読み出し）     | やや高速（複製ディスクから読み出し可能） |
| パフォーマンス（書き込み） | 高速（分割して同時に書き込む）           | 単独ディスクと同程度                     |
| 利用効率（容量）        | ディスク数 × 容量                        | 1台分の容量                              |
| 推奨用途               | 高速処理が求められる一時データやキャッシュ | 重要データのバックアップやサーバー用途    |
| ディスク台数（最小）    | 2台以上                                 | 2台以上                                  |

- RAID 0 でEBSを使うと単一ボリューム障害でデータ消失するため、バックアップが必須です。
- RAID 1 は冗長性が高まりますが、EBS自体が冗長化されているため、RAID 1を使うメリットは少ないことが多いです。
- AWSでは、EBSのスナップショットやAuto Scalingを活用して冗長性を確保する方が一般的です。

## スナップショットの作成

EBSのスナップショットは、EBSの使用状況に依存せず、非同期的に作成可能です。このため、「EBSボリュームは通常通り利用可能である」というのが正しい見解です。ただし、データの整合性を保つためには、EBSボリュームを停止してからスナップショットを取得することが推奨されています。

スナップショットを作成する際には、以下の点に留意する必要があります。

- EBSボリュームのスナップショットをルートデバイスとして作成する場合、インスタンスを停止してからスナップショットを取得する必要があります。
- 休止状態が有効なインスタンスからはスナップショットを作成することができません。
- 休止中のインスタンスからスナップショットを取得することは不可能です。
- ボリュームの前にあるスナップショットがpending状態であっても、そのボリュームのスナップショットを作成することは可能ですが、1つのボリュームに対して複数のpendingスナップショットを作成すると、スナップショットが完了するまでボリュームのパフォーマンスが低下する可能性があります。
- スナップショットの数は、1つのpendingまたはst1ボリュームに対して1つのsc1スナップショット、その他のボリュームタイプに対しては最大5つのpendingスナップショットに制限されています。同じボリュームで複数のスナップショットを同時に作成しようとした際にConcurrentSnapshotLimitExceededエラーが発生した場合は、pendingスナップショットが1つ以上完了するまで待機し、その後に次のスナップショットを作成してください。
- AWS Marketplace製品コードを使用してボリュームからスナップショットが作成されると、その製品コードはスナップショットに引き継がれます

## EBSの暗号化

| **項目** | **内容** |
|---------|---------|
| **暗号化対象** | EBSボリューム、スナップショット、AMI |
| **暗号化方式** | AWS Key Management Service（KMS）を使用 |
| **デフォルト暗号化** | 有効にすると**新規ボリュームが自動で暗号化** |
| **パフォーマンス影響** | **なし**（ハードウェアレベルで最適化） |
| **リージョン間コピー** | **暗号化スナップショットは復号せずコピー可能** |
| **鍵管理** | AWS管理キー or カスタマー管理キー（CMK）を選択可能 |
| **暗号化の変更** | 既存の非暗号化ボリュームを直接暗号化は不可（スナップショット経由で対応） |

✅ **推奨**: 機密データを扱う場合は**デフォルト暗号化を有効化！**

### EC2インスタンスにアタッチして利用するEBSボリュームの暗号化方法(タイミング)

1. EBSボリュームを作成する際に暗号化を有効にする
2. そのボリュームをEC2インスタンスに接続する

- EBSボリュームの暗号化は、作成時にのみ適用される
- 後から暗号化されていないEBSボリュームに暗号化を施すことはできない
- 後から暗号化する場合、スナップショットからEBSボリュームを復元する際に暗号化を有効にする

## その他

### デタッチ

EC2インスタンスのルートボリュームとして設定されているEBSボリュームは、デフォルトの設定により、インスタンスが削除される際に同時に削除されます。

さらに、インスタンスが稼働中の場合は、まずインスタンスからボリュームをデタッチする必要があります。EBSボリュームがインスタンスのルートデバイスである場合、ボリュームをデタッチする前にインスタンスを停止することが求められます。したがって、古いEC2インスタンスを停止した後にボリュームをデタッチすることになります。

### EBSボリュームを使用できるようにする

EC2インスタンスに新たにアタッチしたボリュームを利用するためには、まずその`ボリューム内にファイルシステムを構築する`必要があります。EC2インスタンスには、必ずルートデバイス用のEBSボリュームである/dev/xvdaが一つ接続されています。さらに、/dev/sdfを用いて追加のEBSボリュームをインスタンスに接続することが可能です。

追加したEBSボリュームを使用するには、まず任意のファイルシステムでそのボリュームをフォーマットし、次にマウントする必要があります。これにより、他のボリュームと同様にEBSボリュームにアクセスできるようになり、このファイルシステムに保存されたデータはすべてEBSボリュームに記録されます。

### EC2への接続について

- EBSボリュームを一つのインスタンスにのみアタッチでき、複数インスタンスで共有することはできない
  - ただし、プロビジョンドIOPSボリュームの一部は複数のEC２インスタンスにアタッチするマルチアタッチが利用可能
- 同じAZ内のインスタンスにのみアタッチ可能

