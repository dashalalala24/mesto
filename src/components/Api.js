import { data } from "autoprefixer";

export default class Api {
  constructor(data) {
    this._serverURL = data.serverURL;
    this._headers = data.headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    }
  }

  getInitialCards() {
    return fetch(`${this._serverURL}/cards`, {
      headers: this._headers
    })
      .then(this._checkRes);
  }

  getUserInfo() {
    return fetch(`${this._serverURL}/users/me`, {
      headers: this._headers,
    })
      .then(this._checkRes);
  }

  setUserInfo(data) {
    return fetch(`${this._serverURL}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,

      })
    })
      .then(this._checkRes);
  }

  // addNewCard() {

  // }

  // like() {

  // }

  // countLikes() {

  // }

  // deleteCard() {

  // }

  setProfilePic(data) {
    return fetch(`${this._serverURL}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(this._checkRes);
  }
}