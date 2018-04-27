# Introduction to Web Components via a Toast

## Step 4

In Step 4 we're going to add a duration attribute to auto close
the toast after duration. Refer [Custom Elements v1: Reusable Web Components](https://developers.google.com/web/fundamentals/web-components/customelements) for how to use attributes.

1. Observe the attribute duration
2. Create `attributeChangedCallback` function to set `this.duration` to the attribute value
3. Update `open` function to setTimeout to call `close` using `this.duration` if set

### Questions?

Please reach out to us on Twitter, we're happy to help :-)

—[John](https://twitter.com/JohnRiv) & [Chris](https://twitter.com/chiefcll)
