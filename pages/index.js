
import { userName, userOccupation, cardsSection, buttonOpenProfileEditForm, popupEditProfile, formEditProfile, newUserName, newUserOccupation, buttonCloseEditProfile, buttonAddCardForm, popupNewCard, formAddNewCard, newCardName, newCardLink, buttonCloseNewCard, popupFullImage, fullImage, fullImageCaption, buttonCloseFullImage, newCardData, initialCards, settings} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';


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
  profileEditFormValidator.disableButton();
  formEditProfile.reset();
}

function submitNewCardForm(evt) {
  evt.preventDefault();
  newCardData.name = newCardName.value;
  newCardData.link = newCardLink.value;
  createNewCard(newCardData);
  closePopup(popupNewCard);
  newCardFormValidator.disableButton();
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


// создание карточек

function createCard(data) {
  const card = new Card(data, '#card__template', handleCardClick);
  const cardItem = card.generateCard();
  return cardItem;
}

initialCards.forEach((data) => {
  cardsSection.append(createCard(data));
});

function createNewCard(data) {
  cardsSection.prepend(createCard(data));
}


// экземпляры класса для проверяемых форм

const profileEditFormValidator = new FormValidator(settings, formEditProfile);
profileEditFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(settings, formAddNewCard);
newCardFormValidator.enableValidation();