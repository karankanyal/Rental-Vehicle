import { API_URL } from './config.js';
import { AJAX } from './helper.js';

export function countryDetail(country) {
  try {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then(res => res.json())
      .then(data => {
        const latest = data.filter(d => d.name.common == country);
        return latest;
      });
  } catch (err) {
    alert(err);
  }
}

// Using feocode.xyz API
const findCountry = async function (lat, lng) {
  const data = await AJAX(`${API_URL}/${lat},${lng}?geoit=json`);
  console.log(data);
  if (data) countryDetail(data.country);
};

export const getLocation = function () {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(currPosition, error);
};

const currPosition = function (position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  coords = { latitude, longitude };

  findCountry(latitude, longitude);
};

const error = err => {
  console.log(err);
};
