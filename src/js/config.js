import flightImg1 from '../assets/flight/1.svg';
import flightImg2 from '../assets/flight/2.svg';
import flightImg3 from '../assets/flight/3.svg';
import flightImg4 from '../assets/flight/4.svg';
import flightImg5 from '../assets/flight/5.svg';
import flightImg6 from '../assets/flight/6.svg';
import flightImg7 from '../assets/flight/7.svg';
import flightImg8 from '../assets/flight/8.svg';
import flightImg9 from '../assets/flight/9.svg';
import flightImg10 from '../assets/flight/10.svg';

import bikeImg1 from '../assets/bikeCompanyLogo/1.svg';
import bikeImg2 from '../assets/bikeCompanyLogo/2.svg';
import bikeImg3 from '../assets/bikeCompanyLogo/3.svg';
import bikeImg4 from '../assets/bikeCompanyLogo/4.svg';
import bikeImg5 from '../assets/bikeCompanyLogo/5.svg';
import bikeImg6 from '../assets/bikeCompanyLogo/6.svg';
import bikeImg7 from '../assets/bikeCompanyLogo/7.svg';
import bikeImg8 from '../assets/bikeCompanyLogo/8.svg';
import bikeImg9 from '../assets/bikeCompanyLogo/9.svg';
import bikeImg10 from '../assets/bikeCompanyLogo/10.svg';

import carImg1 from '../assets/carCompanyLogo/1.svg';
import carImg2 from '../assets/carCompanyLogo/2.svg';
import carImg3 from '../assets/carCompanyLogo/3.svg';
import carImg4 from '../assets/carCompanyLogo/4.svg';
import carImg5 from '../assets/carCompanyLogo/5.svg';
import carImg6 from '../assets/carCompanyLogo/6.svg';
import carImg7 from '../assets/carCompanyLogo/7.svg';
import carImg8 from '../assets/carCompanyLogo/8.svg';
import carImg9 from '../assets/carCompanyLogo/9.svg';
import carImg10 from '../assets/carCompanyLogo/10.svg';
import carImg11 from '../assets/carCompanyLogo/11.svg';
import carImg12 from '../assets/carCompanyLogo/12.svg';

export const bikeBr = [
  bikeImg1,
  bikeImg2,
  bikeImg3,
  bikeImg4,
  bikeImg5,
  bikeImg6,
  bikeImg7,
  bikeImg8,
  bikeImg9,
  bikeImg10,
];

export const flightBr = [
  flightImg1,
  flightImg2,
  flightImg3,
  flightImg4,
  flightImg5,
  flightImg6,
  flightImg7,
  flightImg8,
  flightImg9,
  flightImg10,
];

export const carBr = [
  carImg1,
  carImg2,
  carImg3,
  carImg4,
  carImg5,
  carImg6,
  carImg7,
  carImg8,
  carImg9,
  carImg10,
  carImg11,
  carImg12,
];

export const LOCATION_API_URL = 'https://geocode.xyz';
export const COUNTRY_API_URL = 'https://restcountries.com/v3.1/name';

export const value = `<form action="submit">
            <input class="input pick--Up__Location"  type="text" placeholder="Pick-up location" />
            <input class="input drop--Off__Location hidden" type="text" placeholder="Drop-off location" />
            <input
              class="input pick--Up__Date"
              type="date"
              placeholder="Pick-up-date location"
            />
            <input
              class="input pick--Up__Time"
              type="time"
              placeholder="Pick-up-time location"
            />
            <input
              class="input drop--Off__Date"
              type="date"
              placeholder="Drop-off-date location"
            />
            <input
              class="input drop--Off__Time"
              type="time"
              placeholder="Drop-off-time location"
            />
            <input class="input search__button" type="submit" value="Search" />
          </form>`;
