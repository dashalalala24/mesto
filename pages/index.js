
import { userName, userOccupation, cardsSection, popupEditProfileSelector, buttonOpenProfileEditForm, formEditProfile, newUserName, newUserOccupation, buttonCloseEditProfile, buttonAddCardForm, formAddNewCard, newCardName, newCardLink, buttonCloseNewCard, fullImage, fullImageCaption, buttonCloseFullImage, newCardData, initialCards, settings } from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js'
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';

// function handleCardClick(name, link) {
//   fullImage.alt = `Фотография: ${name}`;
//   fullImage.src = link;
//   fullImageCaption.textContent = name;
//   openPopup(popupFullImage);
// }


// открытие попапов

// function openPopup(popup) {
// popup.classList.add('popup_opened');
// document.addEventListener('keydown', closePopupByEscape);
// window.addEventListener('click', closePopupByClickOnOverlay);
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupByEscape);
//   window.removeEventListener('click', closePopupByClickOnOverlay);
// }


// рендер форм

// function renderProfileEditForm() {
//   newUserName.value = userName.textContent;
//   newUserOccupation.value = userOccupation.textContent;
// }

// function resetAddCardForm() {
//   newCardName.form.reset();
//   newCardLink.form.reset();
// }

// // сабмиты форм

// function submitEditProfileForm(evt) {
//   evt.preventDefault();
//   userName.textContent = newUserName.value;
//   userOccupation.textContent = newUserOccupation.value;
//   closePopup(popupEditProfile);
//   profileEditFormValidator.disableButton();
//   formEditProfile.reset();
// }

// function submitNewCardForm(evt) {
//   evt.preventDefault();
//   newCardData.name = newCardName.value;
//   newCardData.link = newCardLink.value;
//   createNewCard(newCardData);
//   closePopup(popupNewCard);
//   newCardFormValidator.disableButton();
//   formAddNewCard.reset();
// }


// закрытие по esc

// function closePopupByEscape(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }


// закрытие кликом по оверлею

// function closePopupByClickOnOverlay(evt) {
//   if (evt.target.classList.contains('popup_opened')) {
//     closePopup(evt.target);
//   }
// }


// открытие попапов

buttonOpenProfileEditForm.addEventListener('click', () => {
  // renderProfileEditForm();
  profileEditFormValidator.hideErrors();
  popupEditProfile.open();
});

buttonAddCardForm.addEventListener('click', () => {
  // resetAddCardForm();
  newCardFormValidator.hideErrors();
  popupNewCard.open();
});


// //закрытие попапов

// buttonCloseEditProfile.addEventListener('click', () => { closePopup(popupEditProfile); });

// buttonCloseNewCard.addEventListener('click', () => { closePopup(popupNewCard); });

// buttonCloseFullImage.addEventListener('click', () => { closePopup(popupFullImage); });

// // window.addEventListener('click', closePopupByClickOnOverlay);


// //сабмиты редактирования профиля

// formEditProfile.addEventListener('submit', submitEditProfileForm);

// formAddNewCard.addEventListener('submit', submitNewCardForm);






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


// initialCards.forEach((items) => {
//   cardsSection.append(createCard(items));
// });

// function createNewCard(items) {
//   cardsSection.prepend(createCard(items));
// }



// экземпляр класса попапа с userinfoform

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

// экземпляр класса попапа с newcardform

const popupNewCard = new PopupWithForm({
  popupSelector: '.popup_type_new-card',
  handleFormSubmit: (item) => {
      const card = new Card(
        {
          data: item,
          templateSelector: '#card__template',
          handleCardClick: (data) => {
            popupNewCard.open(data);
          },
        })
    // const cardElement = createCard(item).generateCard();
    //       cardList.addItem(cardElement);
    // cardList.addItem(generateCard(data));
    // popupNewCard.close();
  },
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


