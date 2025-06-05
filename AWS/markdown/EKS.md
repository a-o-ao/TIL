# Amazon EKS

https://docs.aws.amazon.com/ja_jp/eks/latest/userguide/what-is-eks.html


### Amazon EKS クラスターを完全にプライベートな構成（Private Cluster）で構築・運用するための設定手順

インターネットを一切介さずに、VPC 内のネットワーク経由のみで Kubernetes クラスターとその関連サービスにアクセスできる構成を作る

|ステップ|内容|目的|
|------|----|----|
|1|mapPublicIpOnLaunch = false、AssociatePublicIpAddress を無効|ノード（EC2）にパブリックIPを付けず、インターネット非接続とする|
|2|プライベートクラスターエンドポイントのみを有効化	kube-apiserver にアクセスできるのは VPC内だけ。|VPNまたはDirect Connect経由が必須|
|3|Amazon ECR への PrivateLink 接続を有効に|ノードが ECR からイメージをプライベートに取得できるようにする|
|4|すべてのイメージを PrivateLink 経由で取得|Cluster Autoscaler や Metrics Server なども含めて インターネット経由させない|

[Amazon EKS ワーカーノードの謎を解くクラスターネットワーク](https://aws.amazon.com/jp/blogs/news/de-mystifying-cluster-networking-for-amazon-eks-worker-nodes/)

## スケーリング方法
###  Horizontal Pod Autoscaler (HPA)
CPU使用率やメモリ使用量といったメトリクスに基づきポッドの数を自動的に増減させる水平方向のスケーリング機能です。
別途 Metrics Server を導入する必要がある。

#### Kubernetesメトリクスサーバー(metrics-server)

- クラスター内のリソース使用状況データを集約する
- デフォルトではインストールされないので別途インストールが必要
- Horizontal Pod Autoscalerを実行するために必要

### Cluster Autoscaler
ノード（実行環境）の数を自動的に増減させるスケーリング機能です。HPAによりポッドのスケールアウトが発生した時に、追加されるポッドを実行するだけのリソースが既存のノードに不足していると、追加のポッドは起動できず待ち状態（Pending）になります。このような場合に、Cluster Autoscalerは新しいポッドが必要とするリソースに基づいて新しいノードを追加し、逆に不要なノードがあればそれらのノードを終了します。

#### Karpenter

- AWSが主体となって開発しているOSS
- 直接クラスターノードを管理することで早く起動できる

## StorageClass

Kubernetesなどのコンテナ技術を使用する場合、Pod内にデータを保存することができないため、外部ストレージが必要となる。

主に Amazon EBS や EFS、FSx などをバックエンドに使ったストレージクラスが使われる。

マウントして使用する用途のため、Kubernetes の PersistentVolume（ブロック or ファイル）が対象となる。
<br>EBS（ブロック）、EFS（ファイル）、FSx（高速並列）など。
<br>S3はオブジェクトストレージなので対象外

## EKSクラスタ内のシークレットの暗号化

EKSクラスタ内の設定情報や各リソースの状態情報、シークレット(例:ログイン認証情報)などの情報は、コントロールプレーン内の専用のデータストア(etcd)に格納されます。etcdのデータはデフォルトでAWSによってディスクレベルで暗号化されますが、より高度なセキュリティが求められる場合、「シークレットの暗号化」オプションを有効にすることで、機密情報に対する追加の暗号化を行うことができます。

## AWS App Mesh

- AWSのコンピューティングサービスの監視と制御を簡素化するためのサービスメッシュ
- EKSクラスターのスケーリングに必要なメトリクスの測定が可能
- Kubernetes用のApp Meshコントローラーを使用してKubernetesとAWS App Meshを統合することで、メッシュ、仮想サービス、仮想ノード、仮想ルーター、ルートなどのリソースをKubernetesを通じて管理することができる

## AWS Controllers for Kubernetes

- さまざまなAWSサービスをKubernetesクラスタから管理するためのKubernetes API拡張コントローラ群の総称
- Kubernetesクラスタから直接AWSサービスの定義、作成を行うことが可能になり、アプリケーションとその依存関係にあるデータベース、メッセージキュー、オブジェクトストレージなどのマネージドサービスを含むすべてをKubernetesにて一元管理することが可能となる
