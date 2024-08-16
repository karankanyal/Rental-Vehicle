export default class InputBarView {
  _parentElement = document.querySelector('.service__Buttons');

  renderInputBar() {
    console.log(this._parentElement);
  }

  renderCountry(data) {
    const currency = document.querySelector('.currency');
    const flag = document.querySelector('.region');

    const keys = Object.keys(data[0].currencies);
    currency.insertAdjacentText('afterbegin', keys[0]);

    flag.src = data[0].flags.svg;
  }
}
