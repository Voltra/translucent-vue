# Component

This library exposes the `Translucent` (or `translucent`) component that represents the translucent card on which your content will sit.

```html
<translucent :container="myContainer">
	<!-- your content -->
</translucent>
```

## Props

|   Name    |     Type      |      Required      | Default |
| :-------: | :-----------: | :----------------: | :-----: |
| container | `HTMLElement` | :heavy_check_mark: |   :x:   |
|    tag    |   `string`    |        :x:         |   div   |
|   blur    |   `integer`   |        :x:         |   10    |
|   theme   |   `string`    |        :x:         |  white  |
|  shadow   |    `bool`     |        :x:         |  true   |

In most use cases, you will use [Vue's ref system](https://vuejs.org/v2/api/#ref) to pass down your `container`.

The `tag` prop is here to allow you to change the root tag to something other than a regular `div` to better suit your liking and needs.

`blur`, `theme` and `shadow` respectively correspond to the [`translucent` options](https://www.npmjs.com/package/translucent#options) `filterValue`, `cardColor` and `shadow`.



## In-depth

In addition to the aforementionned props, the component will by default put two CSS classes on the root tag :

* `translucent__wrapper`
* `theme--<your theme prop>`

This allows you to easily theme your components like it was intended by the original creator of [`translucent`](http://npmjs.com/package/translucent).



The component also exposes a `$translucent` property that is the associated instance of [`Translucent`](https://www.npmjs.com/package/translucent#translucent-element---options--).



## What is being rendered

Let's say you have the following vue template :

```html
<div class="translucent" ref="cont">
    <translucent theme="grey" :container="$refs.cont">
        <div class="translucent__content">
            1-2-3-4
        </div>
    </translucent>
</div>
```

This will be rendered as :

```html
<div class="translucent">
	<div class="translucent__wrapper theme--grey">
        <div class="tl-card-bg-container">
            <div class="tl-card-bg">
            </div>
        </div>
        
        <div class="tl-card-contents-container">
            <div class="tl-card-contents">
                <div class="translucent__content">
                    1-2-3-4
                </div>
            </div>
        </div>
    </div>
</div>
```

