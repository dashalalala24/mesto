
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

const showInputError = (formSelector, inputSelector, errorMessage) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);

  inputSelector.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideInputError = (formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);

  inputSelector.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
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
    submitButtonSelector.classList.add(settings.inactiveButtonClass);
    submitButtonSelector.disabled = true;
  } else {
    submitButtonSelector.classList.remove(settings.inactiveButtonClass);
    submitButtonSelector.disabled = false;
  }
};


const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll(settings.inputSelector));
  const submitButtonSelector = formSelector.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, submitButtonSelector);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => {
      isValid(formSelector, inputSelector);
      toggleButtonState(inputList, submitButtonSelector);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formSelector) => {
    setEventListeners(formSelector);
  });
};

enableValidation();
