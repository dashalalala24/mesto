// import { fullImage, fullImageCaption } from '../utils/constants.js';


export default class Card {
  constructor({ data, templateSelector , handleCardClick }) {
    this._data = data;
    this._cardName = data.cardname;
    this._cardLink = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardItem = document
      .querySelector(this._templateSelector)
      .content.querySelector('.cards__item')
      .cloneNode(true);
      
    return cardItem;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.cards__image');
    this._cardImage.src = this._cardLink;
    this._cardImage.alt = `Фотография: ${this._cardName}`;
    this._element.querySelector('.cards__name').textContent = this._cardName;


    this._buttonDeleteCard = this._element.querySelector('.cards__delete-button');
    this._likeButton = this._element.querySelector('.cards__like');

    this._setEventListeners();

    return this._element;
  }

  _setButtonDeleteCardEventListener() {
    this._buttonDeleteCard.addEventListener('click', () => {
      this._element.remove();
      this._element = null;
    });
  }

  _setLikeButtonEventListener() {
    this._likeButton.addEventListener('click', (event) => {
      event.target.classList.toggle('cards__like_active');
    });
  }

  _setOpenPopupEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._data);
    });
  }

  _setEventListeners() {
    this._setButtonDeleteCardEventListener();
    this._setLikeButtonEventListener();
    this._setOpenPopupEventListeners();
  }
}
