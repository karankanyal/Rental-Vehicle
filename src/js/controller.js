import LocationView from './views/locationView.js';
import * as model from './model.js';
import ServicesRender from './views/servicesRender';
import CarInputView from './views/carInputView.js';
import FlightInputView from './views/flightInputView.js';
import BikeInputView from './views/bikeInputView.js';
import availableCarView from './views/availableCarView.js';

const locationView = new LocationView();
const servicesRender = new ServicesRender();
const carInputView = new CarInputView();
const flightInputView = new FlightInputView();
const bikeInputView = new BikeInputView();

// Location rendering
const locationUpdate = async function () {
  await model.getLocation();
  const { latitude, longitude } = model.state.coords;
  await model.findCountry(latitude, longitude);
  await model.countryDetail(model.state.country);
  locationView._renderCountry(model.state.latest);
};

const carInputs = function () {
  servicesRender.searchData();
  // availableCarView.renderAvailableCars();
};

const carInputUpdation = function () {
  servicesRender.renderInput(carInputView.carInput());
  servicesRender.serviceBrandsRender(carInputView.carBrands());
};

const flightInputUpdation = function () {
  servicesRender.renderInput(flightInputView.flightInput());
  servicesRender.serviceBrandsRender(flightInputView.flightBrands());
};

const bikeInputUpdation = function () {
  servicesRender.renderInput(bikeInputView.bikeInput());
  servicesRender.serviceBrandsRender(bikeInputView.bikeBrands());
};

const init = (function () {
  servicesRender.addHandlerRender();
  servicesRender.renderInput();
  locationView.addHandlerRender(locationUpdate);

  carInputView.addHandlerClick(carInputUpdation);
  flightInputView.addHandlerClick(flightInputUpdation);
  bikeInputView.addHandlerClick(bikeInputUpdation);
  servicesRender.differDropLocation();
  servicesRender.searchInput(carInputs);
})();
