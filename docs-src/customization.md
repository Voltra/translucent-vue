# Customization

## Base styles

You can choose to either use the pre-compiled CSS (located as `dist/index.css`) or import the SCSS module :

```scss
@import "~translucent-vue/src/styles"; // classic import

// OR

@use "~translucent-vue/src/styles" as tv; // scss modules syntax
```



Here are the variables you can override (import) or customize (module) :

```scss
$borderColor: rgba(200,200,200,0.5) !default;
$borderWidth: 1px !default;
$borderRadius: 10px !default;
$transitionDuration: 0.4s !default;
$transitionFn: ease !default;
$useHeight: true !default; // whether or not it should fix the height to 100%
$useWrapperStyles: true !default; // whether or not it should add default styles to the wrapper
$useTextShadow: true !default; // whether or not the text should have a shadow
$textShadow: 0 0 2px rgba(#000, 0.85) !default;
```

::: tip

The new module syntax allows a more fine-grained control over external resources :

```scss
@use "~translucent-vue/src/styles" as tv with(
    $borderColor: black,
    $borderWidth: 3px
);

.my-class{
    border-color: tv.$borderColor;
}
```

:::



## Theming

As `translucent` indicates, you can use your own themes in addition to the default provided ones, that being said, `translucent-vue` gives you a minimal set of tools to ease your job at writing themes :

```scss
@mixin theme($color, $shadow: $textShadow, $useShadow: $useTextShadow){
	// used to define a theme
}

.theme{ // for instance it is used for the default themes
	&--white{
		@include theme(black);

	}

	&--translucent,
	&--black,
	&--grey{
		@include theme(white);
	}
}
```

