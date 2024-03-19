import { Link } from "react-router-dom";
import { useState } from "react"; // useStateをインポート
import "../css/Header.css"; // CSSファイルのインポート

const Header = () => {
  // ユーザーのログイン状態を示す状態変数
  const [isLoggedIn] = useState(false); //setIsLoggedIn

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          {/* ロゴ */}
          <img src="ロゴの画像URL" alt="ロゴ" className="logo" />
        </div>
        <div className="header-right">
          {/* ログインしていない場合のボタン */}
          {!isLoggedIn && (
            <>
              <Link to="/signup" className="button">
                {" "}
                {/* ここでパスを指定 */}
                サインアップ
              </Link>
              <Link to="/login" className="button">
                {" "}
                {/* ここでパスを指定 */}
                ログイン
              </Link>
            </>
          )}
          {/* ログインしている場合のボタン */}
          {isLoggedIn && (
            <>
              <Link to="/search" className="button">
                さがす
              </Link>
              <Link to="/interested" className="button">
                興味あるかも
              </Link>
              <Link to="/messages" className="button">
                メッセージ
              </Link>
              <Link to="/community" className="button">
                コミュニティ
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
