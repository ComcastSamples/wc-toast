class WCToast extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor
    this.root = this.attachShadow({mode: 'open'});
    this.root.innerHTML = `
      <style>
        :host {
          color: var(--wc-toast-color, #000);
        }
        ::slotted(h2) {
          margin: 0;
          font-size: 16px;
          font-weight: 300;
          color: red;
        }
        ::slotted(.title) {
           color: orange;
           border-top: 2px solid green;
        }
        ::slotted(.company) {
          display: block;
          color: green;
        }
        /* DOESN'T WORK (can only select top-level nodes). */
        ::slotted(.company),
        ::slotted(.title .company) {
          text-transform: uppercase;
        }
      </style>
      <slot></slot>
    `;
  }
}
window.customElements.define('wc-toast', WCToast);
