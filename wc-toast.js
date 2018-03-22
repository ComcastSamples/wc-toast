class WCToast extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor
  }

  connectedCallback() {

  }
}
window.customElements.define('wc-toast', WCToast);
