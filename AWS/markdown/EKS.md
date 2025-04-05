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
