import InputBarView from './views/inputBarView.js';
import * as model from './model.js';

const serviceBtn = document.querySelector('.service__Buttons');
const services = document.querySelectorAll('.services');

let coords = {};

const clear = function () {
  services.forEach(ser => {
    ser.style.backgroundColor = 'transparent';
    ser.style.border = 'none';
  });
};

const buttonStyling = function (e) {
  const activeButton = e.target.closest('.services');
  activeButton.style.border = '1px solid rgb(99, 87, 87)';
  activeButton.style.backgroundColor = 'rgba(120, 173, 226, 0.267)';
};

serviceBtn.addEventListener('click', function (e) {
  clear();
  buttonStyling(e);
});

// model.renderCountry()

const inputBarView = new InputBarView();
inputBarView.renderInputBar();

window.addEventListener('load', model.getLocation);
