# AWS CloudFormation

https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/Welcome.html

## AWS CloudFormation の機能一覧

| **機能名** | **説明** |
|-----------|---------|
| **変更セット** | スタックの更新をおこなう時の概要が変更セットで、変更による影響度を確認するためのスタック。スタック変更は直接更新と変更セットの実行で可能。 |
| **ドリフト** | テンプレートによって展開したAWSリソースを展開後に変更した場合に、元テンプレートとの差分を検出するチェック機能。 |
| **スタックセット** | 複数のAWSアカウントと複数のリージョンに対してスタックを作成できる機能。 |
| **スタック間のリソース参照機能（エクスポート/インポート）** | 被参照テンプレートの参照値をエクスポートして値を抽出し、その後参照先のテンプレートのインポートによりリソース参照を行うことで、連携したインフラ展開が可能になる機能。 |


## カスタムリソース
CloudFormationのカスタムリソースは、標準のリソースタイプでは対応できない処理を実行するために非常に便利な機能です。主に`Lambda関数`を利用して、クラウド環境でのインフラ管理を柔軟に拡張できます。

カスタムリソースを活用することで、CloudFormationテンプレート内に独自のプロビジョニングロジックを記述し、スタックの作成、更新（カスタムリソースに変更があった場合）、または削除の際にCloudFormationにそのロジックを実行させることができます。これは、プロビジョニング要件がCloudFormationの標準リソースタイプでは表現できない複雑なロジックやワークフローを含む場合に特に有用です。

``` yaml
Resources:
  MyCustomResource:
    Type: Custom::MyCustomResource
    Properties:
      ServiceToken: arn:aws:lambda:region:account-id:function:function-name
      CustomProperty: "value"
```

## スタックセット

CloudFormationのスタックセットは、複数のAWSアカウントやリージョンに対して同じCloudFormationテンプレートを適用し、リソースを一括で管理・デプロイできる機能です。

### update-stack-set コマンド

複数のアカウントにおけるスタックの更新が実行される。


## ネットワークACLの設定

### IPアドレス172.28.10.1を持つクライアントPCからSSH接続を行う場合

```yaml
# 送信（Egress）: EC2 → クライアントPC（戻りの通信）
NetworkAcl
  RuleNumber: 100
  RuleAction: allow
  Egress: true
  CidrBlock: 172.28.10.1/32
  PortRange:
    From: 1024
    To: 65535

# 受信（Ingress）: クライアントPC → EC2（SSHポート22）
NetworkAcl
  RuleNumber: 120
  RuleAction: allow
  Egress: false
  CidrBlock:172.28.10.1/32
  PortRange:
    From: 22
    To: 22
```

- `Egress: true`: 「送信トラフィック（アウトバウンド）に対するルール」を意味する。falseにするとインバウンルールとなる。
- ここで指定されたポート範囲（1024–65535）は、LinuxなどのOSで使われる エフェメラルポート（動的ポート）範囲 に対応している。

