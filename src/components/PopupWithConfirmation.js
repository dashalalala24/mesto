import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__button');
    this._submitButtonText = this._submitButton.textContent;

  }

  submitDeletion(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }

  renderLoadingDeletion(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Удаление...';
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
}
