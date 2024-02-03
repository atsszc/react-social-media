import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Harun Yunus Aytimur</b> ve <b>1 diğer arkadaşın</b> bugün doğum
            günü.
          </span>
        </div>
        <img className="rightbarAd" src="assets/friend.jpg" alt="" />
        <h4 className="rightbarTitle">Çevrimiçi Arkadaşlar</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Kullanıcı Bilgileri</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Ülke:</span>
            <span className="rightbarInfoValue">Türkiye</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Şehir:</span>
            <span className="rightbarInfoValue">İstanbul</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Yaş:</span>
            <span className="rightbarInfoValue">24</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Kullanıcının Arkadaşları</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/aleyna.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Aleyna Sevinçkan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/mali.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Mali Yahyaoğlu</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/harun.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Harun Aytimur</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/yaren.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Yaren Nida Peker</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
