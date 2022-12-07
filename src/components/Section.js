export default class Section {
  constructor({ renderer, containerSelector} ) {
    // this._renderedItems = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItems(items) {
    // this._renderedItems.reverse().forEach(item => {
    //   this._renderer(item);
    // });
    items.reverse().forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}