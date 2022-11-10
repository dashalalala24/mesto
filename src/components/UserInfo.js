
export default class UserInfo {
  constructor({ userName, userOccupation }) {
    this._userName = document.querySelector(userName);
    this._userOccupation = document.querySelector(userOccupation);
  }

  getUserInfo() {
    const userData = {
      userName: this._userName.textContent,
      userOccupation: this._userOccupation.textContent
    };

    return userData;
  }

  setUserInfo(data) {
    this._userName.textContent = data.userName;
    this._userOccupation.textContent = data.userOccupation;
  }
}