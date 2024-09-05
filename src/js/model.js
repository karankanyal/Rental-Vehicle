import { LOCATION_API_URL, COUNTRY_API_URL } from './config.js';
import { AJAX } from './helper.js';

export const state = {
  coords: {},
  latest: '',
  country: '',
};

// Getting the location detail
export const countryDetail = async function (country) {
  try {
    const countryDetail = await AJAX(`${COUNTRY_API_URL}/${country}`);
    const latest = countryDetail.filter(d => d.name.common === country);
    state.latest = latest;
    return latest;
  } catch (err) {
    console.log(err);
  }
};

export const findCountry = async function (lat, lng) {
  try {
    const data = await AJAX(`${LOCATION_API_URL}/${lat},${lng}?geoit=json`);
    if (data) state.country = data.country;
  } catch (err) {
    console.log(err);
  }
};

export const getLocation = async function () {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          try {
            const { latitude, longitude } = position.coords;
            state.coords = { latitude, longitude };

            // Find the country using the coordinates
            const country = await findCountry(latitude, longitude);
            if (country) {
              // Get the country details and update the state
              await countryDetail(country);
            }

            resolve(state); // Resolve with the updated state
          } catch (error) {
            reject(error); // Reject if any error occurs
          }
        },
        error => {
          reject(error); // Reject if geolocation fails
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
};
