export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};

    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector('.label');

    return refs;
  }

  show() {
    this.refs.button.classList.remove('is-hidden');
  }

  hide() {
    this.refs.button.classList.add('is-hidden');
  }

  disable() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = 'Loading...';
    this.refs.button.classList.add('loading');
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = 'Load more';
    this.refs.button.classList.remove('loading');
  }
}
