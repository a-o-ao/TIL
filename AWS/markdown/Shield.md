# AWS Shield

AWS Shieldは、DDoS攻撃からWS Shield は、AWS のサービスを保護するための DDoS（分散サービス妨害）攻撃対策サービスです。Shield Standard と Shield Advanced にはいくつかの重要な違いがあります。

| 機能                        | **Shield Standard**                   | **Shield Advanced**                    |
|----------------------------|---------------------------------------|----------------------------------------|
| **対象**                   | AWSのすべての顧客                    | ミッションクリティカルなアプリケーション |
| **保護レベル**              | レイヤー3・4のDDoS攻撃保護           | レイヤー3・4・7のDDoS攻撃保護          |
| **詳細なレポート/分析**      | なし                                  | リアルタイムの攻撃分析と詳細レポート    |
| **24/7サポート**            | なし                                  | AWS DRTへのアクセス                  |
| **コスト保護**              | なし                                  | DDoS攻撃による追加コストの保護        |
| **価格**                    | 無料                                  | 有料（使用量に応じて）                 |

Amazon CloudFront にAWS Shieldを組み合わせて、Web アプリケーションへの DDoS 攻撃に対して最適な防御壁を設定することができます。

## セキュリティグループとネットワークACLの違い

セキュリティグループはインスタンス単位でステートフルに設定されるのに対し、
ネットワークACLはサブネット単位でステートレスに設定されるため、それぞれの使用ケースに応じて使い分けが重要です。

| 特徴                         | セキュリティグループ (Security Group)                         | ネットワークACL (Network ACL)                                  |
|----------------------------|----------------------------------------------------------|------------------------------------------------------------|
| **適用範囲**                  | インスタンス単位で適用                                        | サブネット単位で適用                                           |
| **ステートフル/ステートレス**   | ステートフル（インバウンド/アウトバウンドが自動的にトラッキング） | ステートレス（インバウンドとアウトバウンドを別々に設定）        |
| **ルールの方向性**             | インバウンドとアウトバウンドのルールを別々に設定                | インバウンドとアウトバウンドの両方で個別に許可/拒否のルールを設定   |
| **ルールの設定**               | 許可ルールのみ設定可能（拒否ルールは設定不可）                   | 許可と拒否のルール両方を設定可能                                 |
| **デフォルトの挙動**           | デフォルトで全て拒否（必要なルールを追加する必要がある）            | デフォルトで全て許可（必要なルールを追加して制限する）             |
| **処理順序**                  | ルールは一度のパケットで評価され、最初に一致したルールが適用         | ルールはリスト順に評価され、最初に一致したルールが適用             |
| **関連付け可能リソース**       | EC2インスタンス、ENI（Elastic Network Interface）など               | VPC内の全てのサブネット                                           |
| **適用タイミング**             | インスタンス起動時またはネットワークインターフェース作成時に適用       | サブネット作成時に適用                                           |

## AWS Shield Advancedで保護できるAWSリソース

- EC2インスタンス
- Elastic Load Balancing（ELB）
- Amazon CloudFront

※Amazon API Gatewayには関連付けることができません
