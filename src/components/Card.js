export default class Card {
  constructor({ data, userId, templateSelector, handleCardClick, handleDeletion, handleLike}) {
    this._data = data;
    this._cardName = data.name;
    this._cardLink = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeletion = handleDeletion;
    this._handleLike = handleLike;
  }

  _getTemplate() {
    const cardItem = document
      .querySelector(this._templateSelector)
      .content.querySelector('.cards__item')
      .cloneNode(true);

    return cardItem;
  }

  cardIsLiked() {
    const userLikedCard = this._likes.some(user => user._id === this._userId);
    
    return userLikedCard;
  }

  setLikesCounter(newLikes) {
    this._likes = newLikes;

    const likeCounter = this._element.querySelector('.cards__like-counter');
    likeCounter.textContent = this._likes.length;

    this._likeButton = this._element.querySelector('.cards__like');

    if (this.cardIsLiked()) {
      this._likeButton.classList.add('cards__like_active');
    } else {
      this._likeButton.classList.remove('cards__like_active');
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.cards__image');
    this._cardImage.src = this._cardLink;
    this._cardImage.alt = `Фотография: ${this._cardName}`;
    this._element.querySelector('.cards__name').textContent = this._cardName;
    this._buttonDeleteCard = this._element.querySelector('.cards__delete-button');

    this.setLikesCounter(this._likes);

    this._hideDeleteButton();

    this._setEventListeners();

    return this._element;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _hideDeleteButton() {
    if (this._ownerId !== this._userId) {
      this._buttonDeleteCard.style.display = "none";
    }
  }

  _setButtonDeleteCardEventListener() {
    this._buttonDeleteCard.addEventListener('click', () => {
      this._handleDeletion(this._cardId);
    });
  }

  _setLikeButtonEventListener() {
    this._likeButton.addEventListener('click', () => {
      this._handleLike(this._cardId);
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
