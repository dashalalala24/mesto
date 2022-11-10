// import { userName, userOccupation } from '../utils/constants.js'

export default class UserInfo {
  constructor({ userName, userOccupation }){
    this._userName = document.querySelector(userName);
    this._userOccupation = document.querySelector(userOccupation);
  }

  getUserInfo() {
    const userData = {
      name: this._userName.textContent,
      occupation: this._userOccupation.textContent
    };

    return userData;
  }

  setUserInfo(data) {
    this._userName.textContent = data.username;
    this._userOccupation.textContent = data.occupation;
  }
}