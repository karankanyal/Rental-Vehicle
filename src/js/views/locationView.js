export default class locationView {
  _parentElement = document.querySelector('.locationAndLanguage');

  addHandlerRender(handler) {
    handler();
  }

  _renderCountry(data) {
    const keys = Object.keys(data[0].currencies);

    const html = `
          <button class="navigation__Buttons currency">${keys[0]}</button>
          <img src= '${data[0].flags.svg}' class="navigation__Buttons region" />
          `;

    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
