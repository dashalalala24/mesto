let newUserName = document.querySelector('.popup__input_type_name');
let userName = document.querySelector('.profile__name');
let newUserOccupation = document.querySelector('.popup__input_type_occupation');
let userOccupation = document.querySelector('.profile__occupation');
let openProfileEdit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeProfileEdit = document.querySelector('.popup__close-icon');
let editInfoForm = document.querySelector('form')
//let submitButton = document.querySelector('.popup__button');

newUserName.value = `${userName.textContent}`;
newUserOccupation.value = `${userOccupation.textContent}`;


function openEdit() {
  popup.classList.add('popup_opened')
};

openProfileEdit.addEventListener('click', openEdit);


function closeEdit() {
  popup.classList.remove('popup_opened')
};

closeProfileEdit.addEventListener('click', closeEdit);

function formSubmit(evt) {
  evt.preventDefault();
  userName.textContent = `${newUserName.value}`;
  userOccupation.textContent = `${newUserOccupation.value}`;
  closeEdit();
}

editInfoForm.addEventListener('submit', formSubmit)
