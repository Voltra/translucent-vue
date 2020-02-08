# Guide

Welcome to the usage guide for [translucent-vue](https://npmjs.com/package/translucent-vue), the Vue binding for the [translucent](https://npmjs.com/package/translucent) library.

This library allows you to plug a translucent/acrylic/fluent design card/container onto your application.

Note that this library also upgrades the styles generation by allowing you customization through SASS/SCSS.

```html
<div class="translucent" ref="container">
    <translucent theme="grey" :container="$refs.container">
    	<!-- [...] -->
    </translucent>
</div>
```

