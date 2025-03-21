# AWS Auto Scalling

Auto Scaling自体はAuto Scaling グループを作成して使用し、対象のリソース（EC2やECSサービスなど）に対してアタッチします。
適切なスケーリングポリシーを設定することで、リソースの自動管理が可能になります。

## 対象リソース
- EC2
- ECS
- EKS
- RDS
- ElastiCache
- DynamoDB

## 🚀 スケーリングポリシーの種類

| ポリシータイプ                        | 特徴                                                                                 | ユースケース                                                                             |
|------------------------------------|---------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| 動的スケーリング (Dynamic Scaling)     | 負荷に応じて**リアルタイムでスケーリング**。CloudWatchのメトリクスに基づき自動的に増減。      | CPU使用率が一定以上になったら増加、一定以下になったら減少させる                              |
| 予測スケーリング (Predictive Scaling) | **過去のパターンを学習**し、**将来の需要を予測**してスケーリング。                         | 定期的なトラフィック変動（例：平日と週末で異なるトラフィック）に対応                           |
| スケジュールスケーリング (Scheduled Scaling) | あらかじめ決めた**日時に合わせてスケーリング**。                                         | 毎日18時に増やし、24時に減らすなど、定時に対応したい場合                                        |
| 手動スケーリング (Manual Scaling)     | 管理者が**手動でインスタンス数を変更**。                                                 | 予期しない負荷が発生したときに緊急対応として使用                                             |

## 💡 動的スケーリングのポリシータイプ

| ポリシータイプ                                | 説明                                                                                          | 例                                                                                   |
|--------------------------------------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| シンプルスケーリング (Simple Scaling)         | 条件が満たされたときに**一定数のインスタンスを増減**させるポリシー。シンプルだが遅延が発生しがち。 | CPU使用率が80%を超えたら**1台追加**                                                      |
| ステップスケーリング (Step Scaling)           | 条件の程度に応じて**増減数を柔軟に制御**できる。ステップごとに異なる増減数を設定。                 | CPU使用率が70%なら1台、90%なら3台を追加                                                     |
| ターゲット追跡スケーリング (Target Tracking Scaling) | 特定のメトリクス（例：CPU使用率）を**一定の目標値に維持**するようにスケーリング。                         | CPU使用率50%を目標にして、適宜インスタンスを増減                                              |

## ELBとAuto Scalingの連携方法

1. Auto ScalingグループにELBを関連付ける
    - Auto Scalingグループを作成する際に、ターゲットとして`ロードバランサー（ALBやCLBなど）`を指定します。
    - スケーリングで追加・削除されたEC2インスタンスが、自動的にELBに登録・解除されます。
2. ヘルスチェックの統合
    - ELBでヘルスチェックを実施し、異常が検出されたインスタンスをAuto Scalingが自動で置き換えます。
