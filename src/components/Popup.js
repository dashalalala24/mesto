export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    // window.addEventListener('click', closePopupByClickOnOverlay)
  }



  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    // window.removeEventListener('click', closePopupByClickOnOverlay);
  }

  // setEventListeners() {
  //   this._popup.addEventListener('click', (evt) => {
  //     debugger
  //     this._overlay = evt.target.classList.contains('popup_opened');
  //     this._closeButton = evt.target.classList.contains('popup__close-icon');
  //     if (this._overlay || this._closeButton) {
  //       this.close(evt.target);
  //     }
  //   });
  // }
  
  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-icon')) {
        this.close(evt.target);
      }
    });
  }
}