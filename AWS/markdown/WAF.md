# AWS WAF

AWS WAF（Web Application Firewall）は、脆弱性を突く攻撃（クロスサイトスクリプティングやSQLインジェクションなど）から、Webアプリケーションを保護するサービスです。

「Web ACL」というアクセスコントロールリストで、IPアドレス、HTTPヘッダー、HTTP本文、URI文字列などに対してフィルタリングの条件を設定できます。

AWS WAFは、Amazon CloudFront、Application Load Balancer、Amazon API Gatewayなどに割り当てて利用します。Network Load Balancer（NLB）とClassic Load Balancer（CLB）には対応していないので利用できません。

AWS WAFのウェブアクセスコントロールリスト（ウェブACL）を利用することで、対象のWEBサーバーが応答するすべてのHTTP(S)リクエストを詳細に管理することが可能です。以下の要素に基づいてアクセス元を特定し、制御することができます。

- リクエストのIPアドレスの発信元

- リクエストの発信元国

- リクエスト内の文字列一致または正規表現（regex）一致

- リクエストの特定部分のサイズ

- 悪意のあるSQLコードやスクリプトの検出

### ユースケース

地理的な条件に基づいてトラフィックを遮断するルールを設定したAWS WAFのウェブACLを作成し、ALBに関連付けることで、特定の国からのアクセスを効果的に制御することができます。

### レートベースのルール
短期間に大量のリクエストを送信してくるIPアドレスを自動的にブロックする。<br>
レートベースのルールは、設定されたリクエスト頻度を超えたIPアドレスからのリクエストを自動的にブロックするので、IPアドレスを変更して送信される不審なリクエストにも動的にアクセス制限できます。

## AWS WAFで保護できるAWSリソース

- Amazon CloudFront
- Application Load Balancer(ALB)
- Amazon API Gateway

※NLB, CLBには非対応
