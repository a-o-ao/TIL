# AWS Global Accelerator 

https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html

世界中のユーザーからのアプリケーションへのアクセスを高速・安定化するサービスです。

### 特徴：
- AWSのグローバルネットワーク経由で最適なルートを選択

- エッジロケーションで受け取り、最速経路で転送

- 複数のリージョン・エンドポイントに自動でルーティング

- 障害時のフェイルオーバーも自動対応

### CloudFrontとの違い

#### CloudFront：コンテンツ配信（CDN）
- **主な用途**：静的・動的コンテンツのキャッシュ配信

- **対象**：画像、動画、HTML、APIレスポンスなど

- **仕組み**：ユーザーに近いエッジロケーションからコンテンツを提供し、配信を高速化

#### Global Accelerator：アプリケーションのルーティング高速化
- **主な用途**：アプリケーションへのアクセスのネットワーク高速化

- **対象**：ALB、NLB、EC2などのエンドポイント

- **仕組み**：AWSのグローバルネットワークを使って、ユーザーのリクエストを最適なエンドポイントに中継

#### 違いを一言で
* CloudFront：データを「速く配る」ためのキャッシュ
* Global Accelerator：リクエストを「速く届ける」ための中継ネットワーク

### 世界中のユーザーへの低レイテンシー配信には、AWS Global AcceleratorとAmazon CloudFrontの併用が有効

- Global Accelerator：アプリケーションへのアクセスレイテンシーを最適化

- CloudFront：コンテンツ配信のレイテンシーを改善

- 両者ともエッジロケーションを活用
- 両方ともALBを指定して構成する
- 構成例：Global Accelerator → ALB → CloudFront（オリジンにALBを指定）

併用することで、アプリ全体のパフォーマンスが最大化されます。

