import { value } from '../config.js';
class servicesRender {
  constructor() {
    this.serviceBtn = document.querySelector('.service__Buttons');
    this.services = document.querySelectorAll('.services');
    this.carButton = document.querySelector('.car');
    this.bikeButton = document.querySelector('.bike');
    this.flightButton = document.querySelector('.flight');
    this.inputMenu = document.querySelector('.search');
    this.dropOffCheckbox = document.querySelector('#drop--Off__Checkbox');
    this.search__Checkbox = document.querySelector('.search__Checkbox');
    this.all_Brands = document.querySelector('.allBrand');
    this.activeButton = null;
    this.HTML;
    this.pickupLocation = '';
    this.dropoffLocation = '';
    this.pickUpTime = '';
    this.pickUpDate = '';
    this.dropOffTime = '';
    this.dropOffDate = '';
  }

  _clear() {
    this.inputMenu.innerHTML = '';
  }

  searchInput(handler) {
    document
      .querySelector('.search__button')
      .addEventListener('click', function (e) {
        e.preventDefault();
        this.pickupLocation = document.querySelector(
          '.pick--Up__Location'
        ).value;
        this.dropoffLocation = document.querySelector(
          '.drop--Off__Location'
        ).value;
        this.pickUpTime = document.querySelector('.pick--Up__Time').value;
        this.pickUpDate = document.querySelector('.pick--Up__Date').value;
        this.dropOffTime = document.querySelector('.drop--Off__Time').value;
        this.dropOffDate = document.querySelector('.drop--Off__Date').value;
      });
    handler();
  }

  searchData() {
    console.log(this.pickupLocation);
    return this.pickupLocation;
    // dropoffLocation: this.dropoffLocation,
    // pickUpDate: this.pickUpDate,
    // pickUpTime: this.pickUpTime,
    // dropOffDate: this.dropOffDate,
    // dropOffTime: this.dropOffTime,
  }

  renderInput(newHTML = value) {
    if (newHTML) this.HTML = newHTML;
    this.inputMenu.insertAdjacentHTML('afterbegin', this.HTML);
  }

  addHandlerRender() {
    this.serviceBtn.addEventListener('click', e => {
      this.activeButton = e.target.closest('.services');
      this.clearStylishActiveButton();
      this.buttonStyling();
    });
  }

  clearStylishActiveButton() {
    // Remove the 'stylishActiveButton' class from all services
    this.services.forEach(service => {
      service.classList.remove('stylishActiveButton');
    });
  }

  buttonStyling() {
    if (this.activeButton) {
      this.activeButton.classList.add('stylishActiveButton');
    }
  }

  differDropLocation() {
    this.dropOffCheckbox.addEventListener('change', function () {
      document.querySelector('.drop--Off__Location').classList.toggle('hidden');
    });
  }

  serviceBrandsRender(brandHTML) {
    this.all_Brands.innerHTML = '';
    this.all_Brands.innerHTML = ('beforeend', brandHTML);
  }
}

export default servicesRender;
