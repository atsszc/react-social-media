import "./register.css";
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';

export default function Register() {
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
                <input placeholder="Kullanıcı Adı" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Şifre" className="loginInput" />
                <input placeholder="Şifre tekrar" className="loginInput" />
                <button className="loginButton">Kayıt ol</button>
                <button className="loginRegisterButton">Hesaba giriş yapın</button>
            </div>
        </div>
      </div>
    </div>
  );
}
