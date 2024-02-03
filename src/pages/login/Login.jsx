import "./login.css";
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Karam Social <GroupAddSharpIcon fontSize="large" color="blue"/></h3>
          <span className="loginDesc">
            Karam Social ile birlikte arkadaşlarınızla ve çevrenizdeki dünyayla
            bağlantı kurun.
          </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Şifre" className="loginInput" />
                <button className="loginButton">Giriş</button>
                <span className="loginForgot">Şifremi unuttum</span>
                <button className="loginRegisterButton">Yeni hesap oluştur</button>
            </div>
        </div>
      </div>
    </div>
  );
}
