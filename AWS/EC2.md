# Amazon EC2

## AMI

AMI（Amazon Machine Image） は、EC2（Elastic Compute Cloud）のインスタンスを起動するためのテンプレートです。
AMIには、OS、アプリケーション、設定など、EC2インスタンスを立ち上げるために必要なすべての情報が含まれています。

### AMIを複数アカウントで共有した場合のソリューション

1. Launch Permissionの設定<br>
AMIを特定のAWSアカウントと共有するために、Launch Permissionを設定できます。この方法では、AMIに対して、他のアカウントがそのAMIを使ってインスタンスを起動できるように許可します。

2. Amazon EC2 Resource Access Manager（RAM）の利用<br>
AWS Resource Access Manager (RAM) を使用することで、AWS Organizations内の複数のアカウントに対してAMIを共有することができます。これにより、複数のアカウント間でリソースを安全に共有できます。

3. S3を使用したAMIバックアップと共有<br>
AMIをバックアップとしてS3バケットに保存し、必要に応じて他のアカウントとS3バケットを共有する方法もあります。この方法では、AMIイメージをS3経由で共有し、異なるアカウントで使用できます。



