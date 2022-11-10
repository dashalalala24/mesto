
export default class FormValidator {
  constructor(data, formElement) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._formList = Array.from(this._formElement.querySelectorAll(this._formSelector));
  }

  _showInputError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.classList.add(this._errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = '';
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  enableButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this.enableButton();
    }
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        this._isValid(inputElement);

        this._toggleButtonState();
      });
      // inputElement.addEventListener('mouseout', () => {
      //   this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      //   this._isValid(inputElement);

      //   this._toggleButtonState();
      // });
    });


  }



  hideErrors() {
    this._inputList.forEach((inputElement) => {
      this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      this._hideInputError(inputElement);
    });
  }

  enableValidation() {
    this._setEventListeners(this._formSelector);
  }
}