# Amazon API Gateway

## API Gateway の権限
Amazon API Gatewayでは、作成したAPI を呼び出したり、API キャッシュを更新したりするために、IAM アクションを行うためのアクセス許可を API 発信者に付与する必要があります。API の呼び出しや API キャッシュの更新を API 発信者に許可するには、 IAM ポリシーを作成して、ユーザー、グループ、またはロールにそのポリシーをアタッチして、権限を付与します。