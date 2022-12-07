import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__button');
    this._submitButtonText = this._submitButtom

  }

  submitAction() {

  }


  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButtonText = 'Удаление...'
    } else {
      this._submitButtonText = this._submitButton.textContent;
    }
  }
}