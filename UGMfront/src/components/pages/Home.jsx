import "../css/Home.css"; // CSSファイルのインポート
//import { Link } from "react-router-dom";
//mport Header from "../common/Header"; // Headerコンポーネントのインポート
//import Footer from "../common/Footer"; // Footerコンポーネントのインポート

function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <h1>～Under Match～</h1>
        <p>ようこそ地底民の皆様</p>

        <div className="cta-buttons"></div>

        <div className="features">
          <h2>コンセプト:</h2>
          <ul>
            <li>アンダーグラウンドでの出会いをサポートします。</li>
            <li>地下遊び経験者同士で繋がるもよし！</li>
            <li>地下遊び初心者と経験者で繋がり、新しい場を開拓するもよし</li>
            <li>初心者同士で繋がり新しい世界へ一緒に飛び込むもよし</li>
            <li>あなた次第で新しい世界への扉を無限に開きます</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
