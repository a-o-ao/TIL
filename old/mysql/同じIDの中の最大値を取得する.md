## 同じIDの中の最大値を取得する

```
SELECT
    T1.cd
   ,T1.name
   ,T1.addr
   ,T1.from_date
FROM 社員マスタ AS T1 
INNER JOIN (
   SELECT
     cd AS F1
    ,MAX(from_date) AS F2
   FROM
    社員マスタ GROUP BY cd ) AS T2
ON T2.F1=T1.cd AND T2.F2=T1.from_date
ORDER BY
    cd
```
