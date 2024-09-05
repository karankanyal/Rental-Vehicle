import { value } from '../config.js';
import ServiceRender from './servicesRender.js';
import { carBr } from '../config.js';

class carInputView extends ServiceRender {
  addHandlerClick(handler) {
    this.carButton.addEventListener('click', () => {
      this._clear();
      handler();

      if (this.search__Checkbox.classList.contains('zeroVisibility'))
        this.search__Checkbox.classList.remove('zeroVisibility');
    });
  }

  carInput() {
    return value;
  }

  carBrands() {
    let result = '';
    for (let i = 0; i < carBr.length; i++) {
      result += `<img src="${carBr[i]}" alt="bikeCompany-${i}" id="bikeCompany-${i}" class="bikeBrand brand"/>`;
    }
    return result;
  }
}

export default carInputView;
