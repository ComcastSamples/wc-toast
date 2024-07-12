import { html, css, LitElement } from 'lit-element';

class WCToast extends LitElement {
  static properties = {
    duration: { type: Number },
    name: { type: String },
    isOpen: { type: Boolean, reflect: true },
    isClosed: { type: Boolean, reflect: true },
  }
  
  static styles = css`
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

    :host([isclosed]) {
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
  `

  constructor() {
    super();
  }

  render() {
    return html`
      <div @click=${this.close} class="close">X</div>
      ${this.name}
      <slot></slot>
    `;
  }

  open() {
    this.isOpen = true;
    this.isClosed = false;

    if (this.duration) {
      setTimeout(_ => this.close(), this.duration * 1000);
    }
  }

  close() {
    this.isOpen = false;
    this.isClosed = true;
  }
}

window.customElements.define('wc-toast', WCToast);
