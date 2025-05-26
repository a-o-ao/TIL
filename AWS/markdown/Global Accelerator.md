# AWS Global Accelerator 

https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html

Global Accelerator は、グローバルなネットワークを使って、ユーザーから最も近い AWS エッジロケーションを経由して、アプリケーションに高速・信頼性高くアクセスさせるサービス。

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

## AWS Global Accelerator の標準アクセラレーターのエンドポイント

Global Accelerator に設定できる「標準アクセラレーターのエンドポイント」は、トラフィックを実際に受け取る ターゲット（バックエンド） のことです。

### 対応するエンドポイントの種類

|種類|	説明|
|----|----|
|Application Load Balancer (ALB)|	L7レベルのロードバランサー|
|Network Load Balancer (NLB)|	L4レベルで高速処理が可能|
|EC2 インスタンス|	単体インスタンスでも可能（直接指定）|
|Elastic IP アドレス|	固定IPを持つリソースへのルーティング|

## 固定パブリックIPアドレスが利用可能
Global Acceleratorは2つの固定パブリックIPアドレスを保有しており、ユーザーはこの固定IPアドレスへアクセスします。エンドポイントが増減してもIPアドレスに影響なくサービスを継続できるため可用性が向上します。<br>
また、Elastic IPアドレスを割り当てられないALBへのアクセスが、Global Acceleratorを利用して固定IPアドレスでアクセス可能になります。

![image](https://ping-t-resouces.com/uploads/question_image/file/21709/kkk56951.jpg?t=1652159536)
