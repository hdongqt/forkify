import View from './View.js';
import icons from 'url:../../img/icons.svg';
class NotFoundView extends View {
  _parentElement = document.querySelector('body');
  _message = 'Not found page';

  _generateMarkup() {
    return `
      <div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${this._message}</p>
     </div>
    `;
  }
}

export default new NotFoundView();
