# zipcode-console-app
郵便番号から住所を出力するコンソールアプリ

# 環境
- Node.js v20.9.0
- npm 10.0.0

# 使用しているWeb API
- [郵便番号検索API](https://zipcloud.ibsnet.co.jp/doc/api)

# 使い方
引数に調べたい郵便番号を半角数字7桁ハイフン無しで渡して実行する。

```
$ node app.js 1050011
東京都港区芝公園
```

該当する住所が複数ある場合も複数表示される
```
$ node app.js 0040000
北海道札幌市厚別区
北海道札幌市清田区
```

引数なし
```
$ node app.js
引数がありません
```

桁エラー
```
$ node app.js 105
パラメータ「郵便番号」の桁数が不正です。
```