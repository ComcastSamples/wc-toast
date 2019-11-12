import {LitElement, html} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

class WCToast extends LitElement {
  static get properties() {
    return {
      duration: Number,
      name: String,
      isOpen: {
        type: Boolean,
        reflect: true
      },
     }
  }

  constructor() {
    super();
    this.close = this.close.bind(this);
  }

  render() {
    return html`
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

        :host([isopen]) {
          opacity: 1;
          transform: translateY(-20px);
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        ${this.beenOpened && html`
          :host {
            opacity: 0;
            transform: translateY(100px);
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
          }`
        }

        .close {
          cursor: pointer;
          position: absolute;
          right: 4px;
          top: 4px;
        }
      </style>
      <div @click=${this.close} class="close">X</div>
      ${this.name}
      <slot></slot>
    `;
  }

  open() {
    this.isOpen = true;
    this.beenOpened = true;

    if (this.duration) {
      setTimeout(_ => this.close(), this.duration * 1000);
    }
  }

  close() {
    this.isOpen = false;
  }
}
window.customElements.define('wc-toast', WCToast);
