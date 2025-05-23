# AWS Lambda

## VPC アクセス（VPC 接続）

Lambda関数は、Lambda専用のセキュアなVPCに配置されているため、インターネットや、インターネットを経由してパブリックサブネット内のAWSリソースにはアクセスできますが、パブリックに公開されていないAWSリソースへはアクセスできません。

![image](https://ping-t-resouces.com/uploads/question_image/file/23012/k58661.jpg?t=1661918062)

Lambda関数からAWS Site-to-Site VPN経由でオンプレミスのデータベースにアクセスするには、Lambda関数をVGWが接続されているVPCに関連付ける「VPCアクセス」の設定をする必要がある。

PCアクセスを設定したLambda関数は、ENIを作成したサブネットへアクセスできるようになる代わりに、インターネットへアクセスできなくなります。

![image](https://ping-t-resouces.com/uploads/question_image/file/23013/kk58661.jpg?t=1661918062)

|項目 | 内容|
|----|----|
|接続先 | Lambda 関数は指定した VPC のプライベートサブネットに接続される|
|ENI（Elastic Network Interface） | Lambda 実行時に ENI（ネットワークインターフェース）が作成され、そのサブネット・セキュリティグループ経由で通信する|
|使えるリソース | RDS, Redshift, ElastiCache など、VPC 内のプライベートリソースに接続可能|
|インターネットアクセス | NAT Gateway などを通じてでないとインターネットには出られない（プライベートサブネットにいるため）|
|起動時間（コールドスタート） | VPC 設定ありの場合、ENI の割り当てにより コールドスタート時間が長くなる傾向あり（※改善済みの側面も）|

###  VPCアクセスなし vs ありの比較

|項目 | VPCアクセスなし | VPCアクセスあり|
|----|----|----|
|インターネット接続 | 直接可能 | NAT Gateway 経由が必要|
|VPC内リソース接続 | 不可 | 可能|
|コールドスタート | より早い | やや遅くなる場合あり（改善あり）|
