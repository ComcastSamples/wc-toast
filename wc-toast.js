const globalTemplates = {};
class WCToast extends HTMLElement {
  static get name() {
    return 'WCToast';
  }

  static get template() {
    return `
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
  }

  constructor() {
    super();
    this.root = this.attachShadow({mode: 'open'});
    this.render();
  }

  static get observedAttributes() {
    return ['duration'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'duration') {
      this.duration = newValue;
    }
  }

  open() {
    this.className = 'open';
    this.root.querySelector('.close').addEventListener('click', e => {
      this.close();
    }, {once: true});

    setTimeout(_ => this.close(), this.duration * 1000);
  }

  close() {
    this.className = 'close';
  }

  render() {
    let template = globalTemplates[this.constructor.name];
    if (!template) {
      template = document.createElement('template');
      template.innerHTML = this.constructor.template;
      globalTemplates[this.constructor.name] = template;
    }

    const node = template.content.cloneNode(true);
    this.root.appendChild(node);
  }
}
customElements.define('wc-toast', WCToast);
