# Amazon FSx

Amazon FSxはファイル共有に適したファイルストレージサービスです。ファイルストレージとはデータをファイルやフォルダの単位で階層構造として管理するストレージ形式のことをいいます。

FSxは、EFSと同様に主に複数のEC2インスタンスやオンプレミスからアクセスされるファイル共有ストレージとして利用されます。

| サービス名                       | 説明 |
|--------------------------------|-----------------------------------------------------------|
| **Amazon FSx for Windows File Server** | Windowsベースのファイルシステムを提供し、`SMB（Server Message Block）プロトコルをサポート`。Windows環境でのファイル共有に適している。 |
| **Amazon FSx for Lustre**        | 高性能な分散型ファイルシステムで、特に大規模なデータ分析やHPC向け。HPCや機械学習の分野に適したストレージサービス。大量のデータを高速で処理するワークロードに最適。`S3 バケットと自動連携できる（S3 <-> FSx for Lustre）` |
| **Amazon FSx for NetApp ONTAP**  | `NFSとSMBの両プロトコルをサポートするマネージドストレージ`。NetAppのONTAP技術をベースにしたファイルシステムで、スナップショットやデータ複製、クラウドとオンプレミスのハイブリッド環境向け。NetApp SnapMirrorを設定するとデータレプリケーション可能。 |
| **Amazon FSx for OpenZFS**       | オープンソースのZFSファイルシステムを提供し、データ保護と高いパフォーマンスを必要とするアプリケーションに最適。 |


### Amazon FSx for NetApp ONTAP

![image](https://ping-t-resouces.com/uploads/question_image/file/26239/kk64985.jpg?t=1712034655)


### Amazon FSx for Lustre

![image](https://ping-t-resouces.com/uploads/question_image/file/26390/k65124.jpg?t=1715836235)

#### ファイルシステムデプロイオプション

https://docs.aws.amazon.com/ja_jp/fsx/latest/LustreGuide/using-fsx-lustre.html

| 特性             | 永続的ファイルシステム（Persistent） | スクラッチファイルシステム（Scratch） |
|------------------|--------------------------------------|----------------------------------------|
| データの保持      | 永続的に保持                         | 一時的（障害時に消失）                |
| 冗長性            | あり（高可用性）                     | なし（単一障害点あり）                |
| 料金              | 高い                                 | 安い                                  |
| 利用期間          | 長期                                 | 短期                                  |
| ネットワークパフォーマンス | 低 | 高 |
| 典型的な用途      | 機械学習、分析基盤                   | HPC、バッチ処理、一時作業            |
