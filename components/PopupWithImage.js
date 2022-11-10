import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }


  open(data) {
    super.open();
    
    this._popupImage.alt = `Фотография: ${data.name}`;
    this._popupImage.src = data.link;
    this._popupCaption.textContent = data.name;
  }
}