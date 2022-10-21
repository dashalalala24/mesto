
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const userName = document.querySelector('.profile__name');
const userOccupation = document.querySelector('.profile__occupation');
const cardsSection = document.querySelector('.cards');

const buttonOpenProfileEditForm = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const formEditProfile = document.forms.user;
const newUserName = formEditProfile.elements.username;
const newUserOccupation = formEditProfile.elements.occupation;
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close-icon');

const buttonAddCardForm = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const formAddNewCard = document.forms.card;
const newCardName = formAddNewCard.elements.cardname;
const newCardLink = formAddNewCard.elements.link;
const cardTemplate = document.querySelector('#card__template').content;
const buttonCloseNewCard = popupNewCard.querySelector('.popup__close-icon');

const popupFullImage = document.querySelector('.popup_type_full-image');
const fullImage = popupFullImage.querySelector('.popup__image');
const fullImageCaption = popupFullImage.querySelector('.popup__caption');
const buttonCloseFullImage = popupFullImage.querySelector('.popup__close-icon');
let cardItem = cardTemplate.querySelector(".cards__item").cloneNode(true);

const initialCards = [
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

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


function handleCardClick(name, link) {
  fullImage.alt = `Фотография: ${name}`;
  fullImage.src = link;
  fullImageCaption.textContent = name;
  openPopup(popupFullImage);
}


// открытие попапов

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
  window.addEventListener('click', closePopupByClickOnOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
  window.removeEventListener('click', closePopupByClickOnOverlay);
}


// создание карточек

function createCard(link, name) {
  const cardItem = cardTemplate.querySelector(".cards__item").cloneNode(true);
  const cardImage = cardItem.querySelector('.cards__image');
  const cardName = cardItem.querySelector('.cards__name');
  const likeButton = cardItem.querySelector('.cards__like');
  const buttonDeleteCard = cardItem.querySelector('.cards__delete-button');

  cardImage.src = link;
  cardImage.alt = `Фотография: ${name}`;
  cardName.textContent = name;

  buttonDeleteCard.addEventListener('click', () => {
    const cardItemToDelete = buttonDeleteCard.closest('.cards__item');
    cardItemToDelete.remove();
  });

  likeButton.addEventListener('click', (event) => {
    event.target.classList.toggle('cards__like_active');
  });

  cardImage.addEventListener('click', () => {
    fullImage.src = cardImage.src;
    fullImage.alt = cardImage.alt;
    fullImageCaption.textContent = cardName.textContent;
    openPopup(popupFullImage);
  });

  return cardItem;
}


// рендер форм

function renderProfileEditForm() {
  newUserName.value = userName.textContent;
  newUserOccupation.value = userOccupation.textContent;
}

function resetAddCardForm() {
  newCardName.form.reset();
  newCardLink.form.reset();
}

// сабмиты форм

function submitEditProfileForm(evt) {
  evt.preventDefault();
  userName.textContent = newUserName.value;
  userOccupation.textContent = newUserOccupation.value;
  closePopup(popupEditProfile);
  evt.submitter.classList.add('popup__button_disabled');
  evt.submitter.setAttribute('disabled', true);
  formEditProfile.reset();
}

function submitNewCardForm(evt) {
  evt.preventDefault();
  cardItem = createCard(newCardLink.value, newCardName.value);
  cardsSection.prepend(cardItem);
  closePopup(popupNewCard);
  evt.submitter.classList.add('popup__button_disabled');
  evt.submitter.setAttribute('disabled', true);
  formAddNewCard.reset();
}


// закрытие по esc

function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}


// закрытие кликом по оверлею

function closePopupByClickOnOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}


// открытие попапов

buttonOpenProfileEditForm.addEventListener('click', () => {
  renderProfileEditForm();
  profileEditFormValidator.hideErrors();
  openPopup(popupEditProfile);
});

buttonAddCardForm.addEventListener('click', () => {
  resetAddCardForm();
  newCardFormValidator.hideErrors();
  openPopup(popupNewCard);
});


//закрытие попапов

buttonCloseEditProfile.addEventListener('click', () => { closePopup(popupEditProfile); });

buttonCloseNewCard.addEventListener('click', () => { closePopup(popupNewCard); });

buttonCloseFullImage.addEventListener('click', () => { closePopup(popupFullImage); });

window.addEventListener('click', closePopupByClickOnOverlay);


//сабмиты редактирования профиля

formEditProfile.addEventListener('submit', submitEditProfileForm);

formAddNewCard.addEventListener('submit', submitNewCardForm);


// карточки из шаблона

initialCards.forEach((element) => {
  const card = new Card(element, '#card__template', handleCardClick);
  const cardItem = card.generateCard();
  cardsSection.append(cardItem);
});


// экземпляры класса для проверяемых форм

const profileEditFormValidator = new FormValidator(settings, formEditProfile);
profileEditFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(settings, formAddNewCard);
newCardFormValidator.enableValidation();