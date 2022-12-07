
export default class UserInfo {
  constructor({ userName, userOccupation, userProfilePic }) {
    this._userName = document.querySelector(userName);
    this._userOccupation = document.querySelector(userOccupation);
    this._userProfilePic = document.querySelector(userProfilePic);
  }

  getUserInfo() {
    const userData = {
      name: this._userName.textContent,
      about: this._userOccupation.textContent,
    };

    return userData;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userOccupation.textContent = data.about;
    this._userProfilePic.src = data.avatar
  }

  setProfilePic(data) {
    this._userProfilePic.src = data.avatar;
  }
}