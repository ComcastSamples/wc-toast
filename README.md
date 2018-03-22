# Introduction to Web Components via a Toast

## Step 5

In Step 5 we're going to do some optimizations with the template tag. Refer to [Custom Elements v1: Reusable Web Components](https://developers.google.com/web/fundamentals/web-components/customelements#fromtemplate) for how to work with template tags.

1. Create a static cache property which returns an object to store our template
2. Move our template html into a static template function
3. Update our constructor to get the template from the cache and if its not there, create a template element with our template markup and put it in the cache object. Use the class name as the key.
4. Clone the template node and append it to the shadowRoot

### Questions?

Please reach out to us on Twitter, we're happy to help :-)

—[John](https://twitter.com/JohnRiv) & [Chris](https://twitter.com/chiefcll)
