class WCToast extends HTMLElement {
  // Different lifecycle hooks defined by the spec!
  constructor() {
    super(); // always call super() first in the constructor
  }

  connectedCallback() {

  }

  disconnectedCallback() {

  }

  attributeChangedCallback(attrName, oldVal, newVal) {

  }
}
window.customElements.define('wc-toast', WCToast);
