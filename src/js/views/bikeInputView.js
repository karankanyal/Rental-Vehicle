import { value } from '../config.js';
import ServiceRender from './servicesRender.js';
import { bikeBr } from '../config.js';

class bikeInputView extends ServiceRender {
  addHandlerClick(handler) {
    this.bikeButton.addEventListener('click', () => {
      this._clear();
      handler();
      if (this.search__Checkbox.classList.contains('zeroVisibility'))
        this.search__Checkbox.classList.remove('zeroVisibility');
    });
    handler;
  }

  bikeInput() {
    return value;
  }

  bikeBrands() {
    let result = '';
    for (let i = 0; i < bikeBr.length; i++) {
      result += `<img src= "${bikeBr[i]}" alt="bikeCompany-${i}" id="bikeCompany-${i}" class="bikeBrand brand"/>`;
    }
    return result;
  }
}

export default bikeInputView;
