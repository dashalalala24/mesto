export const userName = document.querySelector('.profile__name');
export const userOccupation = document.querySelector('.profile__occupation');
export const cardsSection = document.querySelector('.cards');

export const buttonOpenProfileEditForm = document.querySelector('.profile__edit-button');
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const formEditProfile = document.forms.user;
export const newUserName = formEditProfile.elements.username;
export const newUserOccupation = formEditProfile.elements.occupation;
export const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close-icon');

export const buttonAddCardForm = document.querySelector('.profile__add-button');
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const formAddNewCard = document.forms.card;
export const newCardName = formAddNewCard.elements.cardname;
export const newCardLink = formAddNewCard.elements.link;
export const buttonCloseNewCard = popupNewCard.querySelector('.popup__close-icon');

export const popupFullImage = document.querySelector('.popup_type_full-image');
export const fullImage = popupFullImage.querySelector('.popup__image');
export const fullImageCaption = popupFullImage.querySelector('.popup__caption');
export const buttonCloseFullImage = popupFullImage.querySelector('.popup__close-icon');

export const newCardData = {};

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};