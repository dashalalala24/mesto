const userName = document.querySelector('.profile__name');
const userOccupation = document.querySelector('.profile__occupation');
const popup = document.querySelector('.popup');
const cardsSection = document.querySelector('.cards');

const buttonOpenProfileEditForm = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const formEditProfile = popupEditProfile.querySelector('form');
const newUserName = formEditProfile.querySelector('.popup__input_type_name');
const newUserOccupation = formEditProfile.querySelector('.popup__input_type_occupation');
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close-icon');

const buttonAddCardForm = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const formAddNewCard = popupNewCard.querySelector('form');
const newCardName = formAddNewCard.querySelector('.popup__input_type_card-name');
const newCardLink = formAddNewCard.querySelector('.popup__input_type_card-link');
const buttonCloseNewCard = popupNewCard.querySelector('.popup__close-icon');

const popupFullImage = document.querySelector('.popup_type_full-image');
const fullImage = popupFullImage.querySelector('.popup__image');
const fullImageCaption = popupFullImage.querySelector('.popup__caption');
const buttonCloseFullImage = popupFullImage.querySelector('.popup__close-icon');


// открытие попапов

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


// создание карточек

function createCard(link, name) {
  const cardTemplate = document.querySelector('#card__template').content;
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

function renderAddCardForm() {
  newCardName.form.reset();
  newCardLink.form.reset();
}

// сабмиты форм

function submitEditProfileForm(evt) {
  evt.preventDefault();
  userName.textContent = newUserName.value;
  userOccupation.textContent = newUserOccupation.value;
  closePopup(popupEditProfile);
}

function submitNewCardForm(evt) {
  evt.preventDefault();
  cardItem = createCard(newCardLink.value, newCardName.value);
  cardsSection.prepend(cardItem);
  closePopup(popupNewCard);
}


// открытие попапов

buttonOpenProfileEditForm.addEventListener('click', () => {
  renderProfileEditForm();
  openPopup(popupEditProfile);
});

buttonAddCardForm.addEventListener('click', () => {
  renderAddCardForm();
  openPopup(popupNewCard);
});


//закрытие попапов

buttonCloseEditProfile.addEventListener('click', () => { closePopup(popupEditProfile) });

buttonCloseNewCard.addEventListener('click', () => { closePopup(popupNewCard) });

buttonCloseFullImage.addEventListener('click', () => { closePopup(popupFullImage) });


//сабмиты редактирования профиля

formEditProfile.addEventListener('submit', submitEditProfileForm);

formAddNewCard.addEventListener('submit', submitNewCardForm);


// карточки из шаблона

initialCards.forEach((element) => {
  cardItem = createCard(element.link, element.name);
  cardsSection.append(cardItem);
});
