class WCToast extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor
  }

  connectedCallback() {
    this.innerHTML = 'Hello World';
  }
}
window.customElements.define('wc-toast', WCToast);
