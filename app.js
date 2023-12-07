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

  // 空チェック
  const results = data.results;
  if (!results) {
    console.log('該当する住所がありませんでした。');
    return;
  }

  // 住所出力
  results.forEach(result => {
    console.log(result.address1 + result.address2 + result.address3);
  });
}

/* メイン処理 */

// 引数取得
const argNum = process.argv[2];
if (!argNum) {
  console.error('引数がありません');
  return;
}

const baseUrl = 'https://zipcloud.ibsnet.co.jp/api/search';
const targetUrl = `${baseUrl}?zipcode=${argNum}`;
getAddress(targetUrl);