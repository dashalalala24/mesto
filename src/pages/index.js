import './index.css';

import {
  buttonOpenProfileEditForm,
  buttonAddCardForm,
  profilePic,
  profilePicContainer,
  formAddNewCard,
  formEditProfile,
  formEditProfilePic,
  settings,
  apiConfig,
  // newUserName,
  // newUserOccupation,
} from '../utils/constants.js';

import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api';


const api = new Api(apiConfig);

api.getUserInfo()
  .then((result) => {
    userInfo.setUserInfo(result);
    userInfo.setProfilePic(result);
  })
  .catch((error) => {
    console.log(error)
  });

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
  // items: initialCards,
  renderer: (data) => {
    cardList.addItem(createCard(data));
  },
  containerSelector: '.cards',
});

api.getInitialCards()
  .then((result) => {
    console.log(result)
    cardList.renderItems(result);
  })
  .catch((error) => {
    console.log(error)
  })

// cardList.renderItems();


// экземпляр класса попапа юзера

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: (result) => {
    api.setUserInfo(result)
      .then((result) => {
        console.log(result)
        userInfo.setUserInfo(result);
      })
      .catch((error) => {
        console.log(error)
      })
  }
});

popupEditProfile.setEventListeners();

// информация о пользователе

const userInfo = new UserInfo({
  userName: '.profile__name',
  userOccupation: '.profile__occupation',
  userProfilePic: '.profile__pic',
});






// экземпляр класса попапа новой карточки

const popupNewCard = new PopupWithForm({
  popupSelector: '.popup_type_new-card',
  handleFormSubmit: (data) => {
    cardList.addItem(createCard(data));
  }
});

popupNewCard.setEventListeners();

// экземпляр класса попапа смены аватара

const popupEditProfilePic = new PopupWithForm({
  popupSelector: '.popup_type_edit-profilepic',
  handleFormSubmit: (data) => {
    api.setProfilePic(data)
      .then((result) => {
        userInfo.setProfilePic(result)
      })
      .catch((error) => {
        console.log(error)
      });
  }
});



popupEditProfilePic.setEventListeners();


// экземпляр класса попапа с fullimage

const popupFullImage = new PopupWithImage('.popup_type_full-image');
popupFullImage.setEventListeners();


// экземпляры класса для проверяемых форм

const profileEditFormValidator = new FormValidator(settings, formEditProfile);
profileEditFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(settings, formAddNewCard);
newCardFormValidator.enableValidation();

const profilePicEditFormValidator = new FormValidator(settings, formEditProfilePic);
profilePicEditFormValidator.enableValidation();

// открытие попапов

buttonOpenProfileEditForm.addEventListener('click', () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  profileEditFormValidator.hideErrors();
  popupEditProfile.open();
});

buttonAddCardForm.addEventListener('click', () => {
  newCardFormValidator.hideErrors();
  popupNewCard.open();
});


profilePicContainer.addEventListener('click', () => {
  profilePicEditFormValidator.hideErrors();
  popupEditProfilePic.open();
})
