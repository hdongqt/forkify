import View from './View';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :D';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  clearBookmarks(handle) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      handle();
    });
  }

  _generateMarkup() {
    const markupClear =
      this._data.length > 0
        ? `
    <button class="btn--inline bookmarks__btn">Clear bookmarks</button>
    `
        : '';
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('')
      .concat(markupClear);
  }
}

export default new BookmarksView();
