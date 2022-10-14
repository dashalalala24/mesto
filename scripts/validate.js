
const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const formSelector = settings.formSelector;
const inputSelector = settings.inputSelector;
const formError = document.querySelector(`.${inputSelector.id}-error`);

const showInputError = (formSelector, inputSelector, errorMessage) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);

  inputSelector.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
};

const hideInputError = (formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);

  inputSelector.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__error_visible');
  errorElement.textContent = '';
};


const isValid = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideInputError(formSelector, inputSelector);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  })
};

const toggleButtonState = (inputList, submitButtonSelector) => {
  if (hasInvalidInput(inputList)) {
    submitButtonSelector.classList.add('popup__button_disabled');
    submitButtonSelector.disabled = true;
  } else {
    submitButtonSelector.classList.remove('popup__button_disabled');
    submitButtonSelector.disabled = false;
  }
};


const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll(`.popup__input`));
  const submitButtonSelector = formSelector.querySelector('.popup__button');
  toggleButtonState(inputList, submitButtonSelector);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => {
      isValid(formSelector, inputSelector);
      toggleButtonState(inputList, submitButtonSelector);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((formSelector) => {
    setEventListeners(formSelector);
  });
};

enableValidation();
