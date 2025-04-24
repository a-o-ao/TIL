# AWSリソース一覧

AWS-SAA-C03 を取得するまでの学習

## 💾 コンピューティング（Compute）

| リソース名 | 概要 |
| -------------- | --------------------------------------------------------------- |
| [EC2](./markdown/EC2.md) | 仮想サーバーを提供するクラウドコンピューティングサービス。 |
| [Lambda](./markdown/Lambda.md) | サーバーレスでコードを実行できるサービス。暗号化ヘルパーで環境変数をKMSで暗号化できる。 |
| [ECS](./markdown/ECS.md) | コンテナオーケストレーションサービス。 |
| [EKS](./markdown/EKS.md) | Kubernetesを利用したコンテナ管理サービス。 |
| AWS Batch | バッチ処理を自動化するサービス。 |
| AWS Fargate | サーバーレスでコンテナを実行できるサービス。 |
| AWS Outposts | オンプレミス環境でAWSサービスを利用できるハードウェアソリューション。 |

## 🗄️ ストレージ（Storage）

| リソース名 | 概要 |
| -------------- | --------------------------------------------------------------- |
| [S3](./markdown/S3.md) | オブジェクトストレージサービス。 |
| [Storage Gateway](./markdown/Storage%20Gateway.md) | オンプレミスのストレージをAWSクラウドに接続するためのハイブリッドクラウドストレージサービス。 |
| [EBS](./markdown/EBS.md) | ブロックストレージサービス。 |
| [EFS](./markdown/EFS.md) | フルマネージドの`NFS`ファイルシステム。 |
| [FSx](./markdown/FSx.md) | 高性能なファイルシステムを提供するサービス。 |
| AWS Backup | データバックアップと復旧を自動化するサービス。 |
| Glacier | 低コストの長期保存向けストレージ。 |
| [DataSync](./markdown/DataSync.md) | ストレージのデータ移行・バックアップ・同期を効率的に行うマネージドサービス |
| [Snow Family](./markdown/snow%20family.md) | オンプレミス上の大量のデータをAWSのストレージへ安全に転送するために、専用の物理デバイスを提供するサービス |

## 🗺️ ネットワーキング & コンテンツ配信

| リソース名 | 概要 |
| -------------- | --------------------------------------------------------------- |
| [VPC](./markdown/VPC.md) | 仮想ネットワークを作成・管理できるサービス。 |
| [Route 53](./markdown/Route53.md) | DNS管理とトラフィックルーティングサービス。 |
| [CloudFront](./markdown/CloudFront.md) | グローバルCDNサービス。 |
| [ELB](./markdown/ELB.md) | 負荷分散サービス。 |
| AWS Load Balancer Controller | Kubernetes クラスター（特に Amazon EKS）上で動作し、AWS のロードバランサーリソース（ALB/NLB）を自動的にプロビジョニング・管理するためのコントローラー。 |
| Direct Connect | 専用線でAWSとオンプレミスを接続するサービス。 |
| [API Gateway](./markdown/API%20Gateway.md) | API管理と公開を行うサービス。 |
| [Global Accelerator](./markdown/Global%20Accelerator.md) | 複数のリージョンにまたがるアプリケーションの可用性とパフォーマンスを向上させるサービス。 |
| [その他ネットワーク関連](./markdown/その他ネットワーク関連.md) | - |

## 🗃️ データベース（Database）

| リソース名 | 概要 |
| --------------- | --------------------------------------------------------------- |
| [RDS](./markdown/RDS.md) | リレーショナルデータベースサービス。 |
| [DynamoDB](./markdown/DynamoDB.md) | 高速でスケーラブルなNoSQLデータベース。 |
| [Redshift](./markdown/Redshift.md) | データウェアハウスサービス。 |
| [Aurora](./markdown/Aurora.md) | 高性能なリレーショナルデータベース。 |
| [ElastiCache](./markdown/ElastiCache.md) | インメモリデータキャッシュサービス。 |
| Neptune | グラフデータベースサービス。 |
| DocumentDB | MongoDB互換のドキュメントデータベース。 |

## 📊 分析 & ビッグデータ（Analytics & Big Data）

| リソース名 | 概要 |
| ----------------- | --------------------------------------------------------------- |
| Athena | S3データに対するSQLクエリサービス。 |
| [Glue](./markdown/Glue.md) | データカタログを通じてデータのセキュリティとガバナンスを一元的に管理するためのサービス。 |
| EMR | HadoopやSparkを使ったビッグデータ処理サービス。 |
| Redshift Spectrum | S3データを直接クエリ可能なRedshift拡張機能。 |
| [Kinesis](./markdown/Kinesis.md) | リアルタイムデータストリーミングサービス。 |
| QuickSight | BIダッシュボードサービス。 |
| Amazon OpenSearch Service | OpenSearchや従来のElasticsearch OSSなどの検索ソフトウェアを活用して、AWS上で検索ソリューションを構築できる。Amazon RDSやAmazon S3と連携。OpenSearchは、ログ分析、リアルタイムアプリケーションモニタリング、クリックストリーム分析などのユースケースに対応したオープンソースの検索および分析エンジン |
| AppSync | GraphQLを使用して複数のデータソースを統合し、リアルタイムでのデータ更新や効率的なデータ取得を支援するサービス。 |
| [Lake Formation](./markdown/Lake%20Formation.md) | S3上にセキュアなデータレイクをすばやく作るためのサービス |
| DataZone | AWS、オンプレミス、サードパーティーに分散されたデータを一元的にカタログ化し、検索・共有・管理を効率化するサービス |

## 🔧 運用 & 管理（Management & Governance）

| リソース名 | 概要 |
| ----------------- | --------------------------------------------------------------- |
| [Auto Scalling](./markdown/Auto%20Scalling.md) | リソースの負荷に応じてEC2やECSなどのキャパシティを自動で増減させるサービス |
| [CloudFormation](./markdown/CloudFormation.md) | インフラをコードとして管理できるサービス。 |
| CloudTrail | API呼び出しの監査ログを記録するサービス。<br>AWSアカウントにおけるガバナンス、コンプライアンス、運用監査、リスク監査を実施するためのサービスです。 |
| [CloudWatch](./markdown/CloudWatch.md) | 監視とアラートを提供するサービス。 |
| Systems Manager | システム運用を一元管理するサービス。 |
| AWS Config | AWSリソースの設定変更を追跡し、コンプライアンスを評価するサービス。 |
| Elastic Disaster Recovery（AWS DRS） | オンプレミスや他のクラウド上のシステムを AWS 上に複製し、障害発生時に迅速に復旧できるようにするための ディザスタリカバリ（災害復旧）サービス |
| [X-RAY](https://docs.aws.amazon.com/ja_jp/xray/latest/devguide/aws-xray.html) | アプリケーションが処理するリクエストに関するデータを収集するサービスであり、そのデータを表示、フィルタリング、インサイトを取得して、最適化の問題と機会を特定するために使用できるツールを提供 |

## 🔒 セキュリティ & アイデンティティ

| リソース名 | 概要 |
| -------------------- | --------------------------------------------------------------- |
| KMS | 暗号鍵管理サービス。 |
| [Shield](./markdown/Shield.md) | DDoS保護サービス。 |
| [WAF](./markdown/WAF.md) | Webアプリケーションファイアウォール。 |
| Secrets Manager | シークレット管理とローテーションサービス。 |
| [GuardDuty](./markdown/GuardDuty.md) | 悪意のあるアクティビティや不正行為を検出するための脅威検出サービス。|
| [その他セキュリティ関連](./markdown/セキュリティ.md) | - |
| AWS Encryption SDK | 特定のプログラミング言語に依存しない暗号化専用のライブラリ |
| Macie | AWS内の個人データを自動的に検出、分類、保護するサービス。 |
| [AWS Organizations](./markdown/Organizations.md) | 複数のAWSアカウントを一元管理し、ポリシー適用や請求統合を行うためのサービス。SCP（サービスコントロールポリシー）でIAMアクセス制御を行う。 |
| [IAM](./markdown/IAM.md) | ユーザー管理とアクセス制御サービス。 |
| IAM Identity Center （以前のAWS Single Sign-On） | AWSアカウントやアプリケーションへの`シングルサインオン（SSO）`を提供し、ユーザーのアクセス管理を一元化するサービス。 |
| [Directory Service](./markdown/Directory%20Service.md) | AD に依存するワークロードの統合を簡素化し、セキュリティとコンプライアンスを強化し、クラウド移行を合理化するための包括的なクラウド |
| ACM | ・SSL/TLS証明書の 発行・管理・自動更新<br>・ELB、CloudFront、API Gatewayなどと連携して 通信の暗号化<br>・独自ドメイン用のカスタム証明書のインポートも可能 |
| Inspector | 自動脆弱性管理サービス。EC2インスタンス、コンテナ（Amazon ECR）、Lambda関数などのAWSワークロードを継続的にスキャンし、​ソフトウェアの脆弱性や意図しないネットワークの露出を検出 |

## 📨 メッセージング & インテグレーション

| リソース名 | 概要 |
| ------------- | --------------------------------------------------------------- |
| [SQS](./markdown/SQS.md) | メッセージキューサービス。プル型 |
| SNS | プッシュ通知とメッセージ配信サービス。標準で暗号化やフィルタリング機能がある。プッシュ型 |
| EventBridge | イベント管理とルーティングサービス。 |
| Step Functions | サーバーレスワークフロー管理サービス。 |
| Amazon AppFlow | SaaSアプリケーション（Salesforce, Slack, Google Analytics など）とAWSサービス（S3, Redshift など）との間でデータを安全かつ双方向に転送するマネージドサービス |

## 🧠 機械学習（Machine Learning）

| リソース名 | 概要 |
| ------------ | --------------------------------------------------------------- |
| SageMaker | 機械学習モデルの構築・トレーニング・デプロイを支援するサービス。ユーザーが独自に機械学習モデルをコーディングできる開発環境を提供する機械学習プラットフォーム。 |
| Rekognition | 画像・動画分析サービス。画像と動画内の物体、シーン、テキスト、不適切なコンテンツの識別ができる。 |
| Comprehend | 自然言語処理を実施するAIサービス。テキストから場所や人物、キーフレーズ、感情を検出することができる。 |
| Translate | テキストベースのコンテンツを多言語へ翻訳するニューラル機械翻訳サービス。リアルタイム翻訳処理も可能。 |
| Lex | 音声やテキスト型のチャットボットを作成する対話型インターフェースの構築サービス。 |
| Polly | テキストを自然な音声に変換するText to Speechのサービス。 |
| Transcribe  | 音声をテキストに変換する文字起こしサービス。リダクション機能で個人を特定できる情報 (PII) をマスキング/除去することができる。 |
| Amazon Textract | ドキュメント内のテキスト、表、フォーム、手書きの内容を抽出するOCR（光学文字認識）サービス。 |
| AWS Chatbot       | チャットチャネルでのAWSワークロードのモニタリング、運用、トラブルシューティングを簡単に行えるようにするインタラクティブなエージェント。Slack連携が可能。 |
| Amazon Kendra     | 自然言語の非構造化データを機械学習により検索するサービス。 |
| Alexa for Business | 組織でAlexaを使用するためのスキルやツールを提供するサービス。Alexaをオフィスの共有エリアにいるすべての人に共有して、会議室を管理するなども可能。 |
| AWS DeepComposer   | 生成AIによるモデルを利用して音楽を作成しながら機械学習を学べるサービス。 |
| Amazon Forecast | 時系列データに基づいて需要予測を行う機械学習サービス。S3バケット内のデータを活用して予測モデルの学習と予測の実行を行うことができる。さらに、AWS Lambda関数を使用して、この予測モデルを実行するアプリケーションを開発することも可能。 |
| Amazon Personalize | ユーザー向けのパーソナライズされた推薦システムを構築するためのサービス。 |
| Amazon Fraud Detector | 詐欺を検出するための機械学習を利用したサービス。トランザクションデータを元に不正行為を予測。単独でも機能するが、データの取得・保存・通知などは別のAWSリソースと組み合わせる必要がある。[サーバレスと機械学習サービスを利用したリアルタイム不正検知](https://aws.amazon.com/jp/blogs/news/real-time-fraud-detection-using-aws-serverless-and-machine-learning-services/) |
| Amazon Machine Learning | シンプルなインターフェースで機械学習モデルの作成、トレーニング、デプロイを可能にするサービス。|
| Amazon Augumented AI | 人間の判断を機械学習モデルの予測結果に組み合わせ、AIの結果を人間が確認・承認するプロセスを組み込むサービス。特に重要な意思決定において信頼性を高める。 |

## その他

- [横断的な機能](./markdown/横断的な機能.md)
- [データ移行](./markdown/データ移行.md)
- [設定関連](./markdown/設定関連.md)
- [一般用語](./markdown/用語.md)

