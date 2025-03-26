# AWS CloudFormation

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

