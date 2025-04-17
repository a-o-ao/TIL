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

### スケーリング方法
####  Horizontal Pod Autoscaler (HPA)
CPU使用率やメモリ使用量といったメトリクスに基づきポッドの数を自動的に増減させる水平方向のスケーリング機能です。

#### Cluster Autoscaler
ノード（実行環境）の数を自動的に増減させるスケーリング機能です。HPAによりポッドのスケールアウトが発生した時に、追加されるポッドを実行するだけのリソースが既存のノードに不足していると、追加のポッドは起動できず待ち状態（Pending）になります。このような場合に、Cluster Autoscalerは新しいポッドが必要とするリソースに基づいて新しいノードを追加し、逆に不要なノードがあればそれらのノードを終了します。

## StorageClass

Kubernetesなどのコンテナ技術を使用する場合、Pod内にデータを保存することができないため、外部ストレージが必要となる。

主に Amazon EBS や EFS、FSx などをバックエンドに使ったストレージクラスが使われる。

マウントして使用する用途のため、Kubernetes の PersistentVolume（ブロック or ファイル）が対象となる。
<br>EBS（ブロック）、EFS（ファイル）、FSx（高速並列）など。
<br>S3はオブジェクトストレージなので対象外
