import './index.css';

import {
  buttonOpenProfileEditForm,
  formEditProfile,
  buttonAddCardForm,
  formAddNewCard,
  initialCards,
  settings
} from '../utils/constants.js';

import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';


// создание карточек

function createCard(items) {
  const card = new Card({
    data: items,
    templateSelector: '#card__template',
    handleCardClick: (items) => {
      popupFullImage.open(items);
    }
  });
  const cardItem = card.generateCard();
  return cardItem;
}


const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    cardList.addItem(createCard(data));
  },
  containerSelector: '.cards',
});

cardList.renderItems();


// экземпляр класса попапа юзера

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});

popupEditProfile.setEventListeners();

const userInfo = new UserInfo({
  userName: '.profile__name',
  userOccupation: '.profile__occupation'
});


// экземпляр класса попапа новой карточки

const popupNewCard = new PopupWithForm({
  popupSelector: '.popup_type_new-card',
  handleFormSubmit: (data) => {
    cardList.addItem(createCard(data));
  }
});

popupNewCard.setEventListeners();


// экземпляр класса попапа с fullimage

const popupFullImage = new PopupWithImage('.popup_type_full-image');
popupFullImage.setEventListeners();


// экземпляры класса для проверяемых форм

const profileEditFormValidator = new FormValidator(settings, formEditProfile);
profileEditFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(settings, formAddNewCard);
newCardFormValidator.enableValidation();


// открытие попапов

buttonOpenProfileEditForm.addEventListener('click', () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  profileEditFormValidator.hideErrors();
  popupEditProfile.open();
});

buttonAddCardForm.addEventListener('click', () => {
  // resetAddCardForm();
  newCardFormValidator.hideErrors();
  popupNewCard.open();
});
