// server.js
const path = require("path");
// Expressアプリケーションの作成
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Express.jsサーバーが稼働しています。");
});

// Reactアプリケーションの静的ファイルを提供
app.use(express.static(path.join(__dirname, "client/build")));

// その他のAPIエンドポイントやルート設定
// 例: APIエンドポイントの定義
app.get("/api", (req, res) => {
  res.json({ message: "API endpoint" });
});

// Reactアプリケーションへのルート
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
