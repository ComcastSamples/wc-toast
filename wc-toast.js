class WCToast extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor
    this.root = this.attachShadow({mode: 'closed'});
    this.root.innerHTML = `
      <style>
        :host {
          color: var(--wc-toast-color, #000);
        }
        :host-context(.dark) {
          color: white;
          background: #999;
        }
      </style>
      <p id='helloToast'>Hello <slot></slot></p>
    `;
  }
}
window.customElements.define('wc-toast', WCToast);
