import ServiceRender from './servicesRender.js';
import { flightBr } from '../config.js';

class flightInputView extends ServiceRender {
  addHandlerClick(handler) {
    this.flightButton.addEventListener('click', () => {
      this._clear();
      handler();
      this.search__Checkbox.classList.add('zeroVisibility');
    });
  }

  flightInput() {
    return `
        <form action="submit">
            <input id="pick--Up__Input" class="input" type="text" placeholder="Take-off location" />
            <input class="input" type="text" placeholder="Landing location" />
            <input
              class="input"
              type="date"
              placeholder="Take-off-date location"
            />
            <input class="input search__button" type="button" value="Search" />
          </form>
    `;
  }

  flightBrands() {
    let result = '';
    for (let i = 0; i < flightBr.length; i++) {
      result += `<img src= "${flightBr[i]}" alt="bikeCompany-${i}" id="bikeCompany-${i}" class="bikeBrand brand"/>`;
    }
    return result;
  }
}

export default flightInputView;
