import './index.css';

import {
  buttonOpenProfileEditForm,
  buttonAddCardForm,
  profilePicContainer,
  formAddNewCard,
  formEditProfile,
  formEditProfilePic,
  settings,
  apiConfig,
} from '../utils/constants.js';

import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api';

let userId;

const api = new Api(apiConfig);

api.getUserInfo()
  .then((result) => {
    userInfo.setUserInfo(result);
    userInfo.setProfilePic(result);
    userId = result._id;
  })
  .catch((error) => {
    console.log(error);
  });

// создание карточек

function createCard(data) {
  const card = new Card({
    data: data,
    userId: userId,
    templateSelector: '#card__template',
    handleCardClick: (items) => {
      popupFullImage.open(items);
    },
    handleDeletion: (id) => {
      popupDeleteCard.open();
      popupDeleteCard.submitDeletion(() => {
        popupDeleteCard.renderLoadingDeletion(true);
        api.deleteCard(id)
          .then((res) => {
            card.deleteCard();
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            popupDeleteCard.renderLoadingDeletion(false);
          });
      });
    },
    handleLike: (id) => {
      if (card.cardIsLiked()) {
        api.removeLike(id)
          .then((res) => {
            card.setLikesCounter(res.likes);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        api.putLike(id)
          .then((res) => {
            card.setLikesCounter(res.likes);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  });
  const cardItem = card.generateCard();
  return cardItem;
}

const cardList = new Section({
  renderer: (data) => {
    cardList.addItem(createCard(data));
  },
  containerSelector: '.cards',
});

api.getInitialCards()
  .then((result) => {
    cardList.renderItems(result);
  })
  .catch((error) => {
    console.log(error);
  });

// cardList.renderItems();


// экземпляр класса попапа юзера

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: (result) => {
    popupEditProfile.renderLoadingSaving(true)
    api.setUserInfo(result)
      .then((result) => {
        userInfo.setUserInfo(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupEditProfile.renderLoadingSaving(false);
      });
  }
});

popupEditProfile.setEventListeners();

// информация о пользователе

const userInfo = new UserInfo({
  userName: '.profile__name',
  userOccupation: '.profile__occupation',
  userProfilePic: '.profile__pic',
});


// экземпляр класса попапа смены аватара

const popupEditProfilePic = new PopupWithForm({
  popupSelector: '.popup_type_edit-profilepic',
  handleFormSubmit: (data) => {
    popupEditProfilePic.renderLoadingSaving(true);
    api.setProfilePic(data)
      .then((result) => {
        userInfo.setProfilePic(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupEditProfilePic.renderLoadingSaving(false);
      });
  }
});

popupEditProfilePic.setEventListeners();


// экземпляр класса попапа новой карточки

const popupNewCard = new PopupWithForm({
  popupSelector: '.popup_type_new-card',
  handleFormSubmit: (data) => {
    popupNewCard.renderLoadingSaving(true);
    api.addNewCard(data)
      .then((result) => {
        cardList.addItem(createCard(result));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupNewCard.renderLoadingSaving(false);
      });
  }
});

popupNewCard.setEventListeners();


// попап подтверждения удаления карточки

const popupDeleteCard = new PopupWithConfirmation('.popup_type_confirm-deletion');

popupDeleteCard.setEventListeners();


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
});
