# Introduction to Web Components via a Toast

## Step 3

In Step 3 we're going to make the toast work. Start by updating your
markup (innerHTML) to the following:

```html
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
```

1. Add an open method which sets className to `open`
2. Create a close method which sets className to `close`
3. Add a click handler on div.close to call the close method.

### Questions?

Please reach out to us on Twitter, we're happy to help :-)

—[John](https://twitter.com/JohnRiv) & [Chris](https://twitter.com/chiefcll)
