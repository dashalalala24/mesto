let newUserName = document.querySelector('.popup__name');
let userName = document.querySelector('.profile__name');
newUserName.placeholder = `${userName.textContent}`;

let newUserOccupation = document.querySelector('.popup__occupation');
let userOccupation = document.querySelector('.profile__occupation');
newUserOccupation.placeholder = `${userOccupation.textContent}`;


let openProfileEdit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

openProfileEdit.addEventListener('click', function () {
  popup.classList.add('popup__opened')
});

let closeProfileEdit = document.querySelector('.popup__close-icon');

function popupClose() {
  popup.classList.remove('popup__opened')
};

closeProfileEdit.addEventListener('click', popupClose);

let submitButton = document.querySelector('.popup__button');

submitButton.addEventListener('click', function () {
  userName.textContent = `${newUserName.value}`;
  userOccupation.textContent = `${newUserOccupation.value}`;
  popupClose();
})
