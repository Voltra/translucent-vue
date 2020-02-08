# Exports

If you are using a module system, the library exposes :

```javascript
import { Plugin, Translucent } from "translucent-vue"
```

If you are using it directly from the browser, then the library is exposed as the `TranslucentVue` global variable.



You can start using the plugin :

```javascript
import Vue from "vue"
import { Plugin: TranslucentVue } from "translucent-vue"

Vue.use(TranslucentVue);
```

This will register the component globally, if you want to limit the scope of the use of the component, you will need to import it individually in your components :

```javascript
import { Translucent } from "translucent-vue"

export default {
    // [...]
    components: {
        Translucent,
        // [...]
    },
    // [...]
}
```

