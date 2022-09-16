const newUserName = document.querySelector('.popup__input_type_name');
const userName = document.querySelector('.profile__name');
const newUserOccupation = document.querySelector('.popup__input_type_occupation');
const userOccupation = document.querySelector('.profile__occupation');
const openProfileEditForm = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupNewCard = document.querySelector('.popup_type_new-card');
const editInfoForm = popupEditProfile.querySelector('form');

const openNewCardForm = document.querySelector('.profile__add-button');
const newCardName = document.querySelector('.popup__input_type_card-name');
const newCardLink = document.querySelector('.popup__input_type_card-link');

const closeEditProfileButton = popupEditProfile.querySelector('.popup__close-icon');
const closeNewCardButton = popupNewCard.querySelector('.popup__close-icon');
const addNewCardForm = popupNewCard.querySelector('form');

const cardsSection = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card__template').content;

const popupFullImage = document.querySelector('.popup_type_full-image');

const fullImageCaption = document.querySelector('.popup__caption');
const closeFullImageButton = popupFullImage.querySelector('.popup__close-icon');


// открытие попапов

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

openProfileEditForm.addEventListener('click', () => {
  newUserName.value = `${userName.textContent}`;
  newUserOccupation.value = `${userOccupation.textContent}`;
  openPopup(popupEditProfile);
});

openNewCardForm.addEventListener('click', () => {
  newCardName.value = '';
  newCardLink.value = '';
  openPopup(popupNewCard);
});




//закрытие попапов

function closePopup() {
  popupEditProfile.classList.remove('popup_opened');
  popupNewCard.classList.remove('popup_opened');
  popupFullImage.classList.remove('popup_opened');
}

closeEditProfileButton.addEventListener('click', closePopup);

closeNewCardButton.addEventListener('click', closePopup);

closeFullImageButton.addEventListener('click', closePopup);


//сабмиты редактирования профиля

function submitEditForm(evt) {
  evt.preventDefault();
  userName.textContent = `${newUserName.value}`;
  userOccupation.textContent = `${newUserOccupation.value}`;
  closePopup();
}

editInfoForm.addEventListener('submit', submitEditForm);



//добавление карточки

function submitNewCardForm(evt) {
  evt.preventDefault();
  let cardItem = cardTemplate.querySelector('.cards__item').cloneNode(true);
  const cardImage = cardItem.querySelector('.cards__image');
  const cardName = cardItem.querySelector('.cards__name');
  cardImage.src = newCardLink.value;
  cardImage.alt = `Фотография: ${newCardName.value}`;
  cardName.textContent = newCardName.value;
  cardsSection.prepend(cardItem);
  closePopup();

  //лайк

  cardItem.querySelector('.cards__like').addEventListener('click', function (event) {
    event.target.classList.toggle('cards__like_active');
  });

  //удаление карточек

  const deleteCardButton = document.querySelector('.cards__delete-button');
  deleteCardButton.addEventListener('click', function () {
    cardItem = deleteCardButton.closest('.cards__item');
    cardItem.remove();
  });

  //fullscreen

  cardImage.addEventListener('click', () => {
    openPopup(popupFullImage);
    const fullImage = document.querySelector('.popup__image');
    const fullImageCaption = document.querySelector('.popup__caption');
    fullImage.src = cardImage.src;
    fullImage.alt = cardImage.alt;
    fullImageCaption.textContent = cardName.textContent;
  });
}

addNewCardForm.addEventListener('submit', submitNewCardForm);


// шаблоны карточек

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

initialCards.forEach(function (element) {
  let cardItem = cardTemplate.querySelector('.cards__item').cloneNode(true);
  let cardImage = cardItem.querySelector('.cards__image');
  const cardName = cardItem.querySelector('.cards__name');
  const deleteCardButton = cardItem.querySelector('.cards__delete-button');

  cardImage.src = element.link;
  cardImage.alt = `Фотография: ${element.name}`;
  cardName.textContent = element.name;
  cardsSection.append(cardItem);

  //удаление карточек

  deleteCardButton.addEventListener('click', function () {
    cardItem = deleteCardButton.closest('.cards__item');
    cardItem.remove();
  });

  //лайк

  cardItem.querySelector('.cards__like').addEventListener('click', function (event) {
    event.preventDefault();
    event.target.classList.toggle('cards__like_active');
  });

  // fullscreen

  cardImage.addEventListener('click', () => {
    openPopup(popupFullImage);
    const fullImage = document.querySelector('.popup__image');
    fullImage.src = cardImage.src;
    fullImage.alt = cardImage.alt;
    fullImageCaption.textContent = cardName.textContent;
  });
});
