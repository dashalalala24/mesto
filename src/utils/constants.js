export const buttonOpenProfileEditForm = document.querySelector('.profile__edit-button');
export const buttonAddCardForm = document.querySelector('.profile__add-button');
export const formEditProfile = document.forms.user;
export const formAddNewCard = document.forms.card;
export const formEditProfilePic = document.forms.profilepic;
export const profilePicContainer = document.querySelector('.profile__pic-container');

export const apiConfig = {
  serverURL: "https://mesto.nomoreparties.co/v1/cohort-54",
  headers: {
    authorization: '9732efc5-811e-490a-92fd-fca287deba43',
    "Content-Type": "application/json",
  },
};

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};




// export const userName = document.querySelector('.profile__name');
// export const userOccupation = document.querySelector('.profile__occupation');
// export const cardsSection = document.querySelector('.cards');
// export const newUserName = formEditProfile.elements.name;
// export const newUserOccupation = formEditProfile.elements.about;
// export const buttonCloseEditProfile = popupEditProfileSelector.querySelector('.popup__close-icon');
// export const popupEditProfileSelector = document.querySelector('.popup_type_edit-profile');
// export const popupNewCard = document.querySelector('.popup_type_new-card');
// export const newCardName = formAddNewCard.elements.cardname;
// export const newCardLink = formAddNewCard.elements.link;
// export const buttonCloseNewCard = popupNewCard.querySelector('.popup__close-icon');
// export const popupFullImage = document.querySelector('.popup_type_full-image');
// export const fullImage = popupFullImage.querySelector('.popup__image');
// export const fullImageCaption = popupFullImage.querySelector('.popup__caption');
// export const buttonCloseFullImage = popupFullImage.querySelector('.popup__close-icon');
// export const newProfilePicLink = formEditProfilePic.elements.link;
// export const profilePic = document.querySelector('.profile__pic');
// export const newCardData = {};
