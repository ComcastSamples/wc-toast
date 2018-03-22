class WCToast extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor
    this.root = this.attachShadow({mode: 'open'});
    this.root.innerHTML = `
      <style>
        :host {
          background-color: var(--wc-toast-background, #d84315);
          bottom: 0;
          box-sizing: border-box;
          color: var(--wc-toast-color, #fff);
          display: block;
          opacity: 0;
          padding: 20px 40px;
          position: fixed;
          text-align: left;
          transform: translateY(100px);
          z-index: 10000;
        }

        :host(.open) {
          opacity: 1;
          transform: translateY(-20px);
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        :host(.close) {
          opacity: 0;
          transform: translateY(100px);
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        .close {
          cursor: pointer;
          position: absolute;
          right: 4px;
          top: 4px;
        }
      </style>
      <div class="close">X</div>
      <slot></slot>
    `;

    this.root.querySelector('.close').addEventListener('click', e => this.close());
  }

  open() {
    this.className = 'open';
  }

  close() {
    this.className = 'close';
  }
}
window.customElements.define('wc-toast', WCToast);
