// モジュールインポート
const axios = require('axios');

// GETリクエスト関数
const getAddress = async (url) => {
  const response = await axios.get(url);
  const data = response.data;

  //　ステータスコードチェック
  if (data.status != 200) {
    console.error(data.message);
    return;
  }

  const results = data.results;

  // 空チェック
  if (!results) {
    console.log('該当する住所がありませんでした。');
    return;
  }

  // 住所出力
  results.forEach(result => {
    console.log(result.address1 + result.address2 + result.address3);
  });

  return;
}

// メイン処理
const main = () => {
  // 変数定義
  const argNum = process.argv[2];
  const baseUrl = 'https://zipcloud.ibsnet.co.jp/api/search';

  // 引数チェック
  if (!argNum) {
    console.error('引数がありません');
    return;
  }

  // エンドポイント成形
  const targetUrl = `${baseUrl}?zipcode=${argNum}`;

  getAddress(targetUrl);
}

// 実行
main();