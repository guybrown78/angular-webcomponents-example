
## Setup

This project is started from the basic, out the box Angular CLI create new project `ng new`

The Transform Web Components are then installed as a project dependancy from npm. The package can be found here;

https://www.npmjs.com/package/tf-core-components

To install, run;

```
	npm i --save tf-core-components
```

## Additional scaffolding

The project has evolved from the initial bootstrap so be aware additional modules have been added. These modules are things like `AppRoutingModule`, `HttpClientModule`, `FormsModule` and `ReactiveFormsModule` etc.

## app.module

In `app/app.module.ts` we need to allow for non-angular elements. To do that we can define a schema that allows an NgModule to incorporate our `tf-`... modules.

Import `CUSTOM_ELEMENTS_SCHEMA` from `@angular/core` so the import looks similar to:

`import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';`

Then ensure the schema property is added to the NgModule decorator and `CUSTOM_ELEMENTS_SCHEMA` to the set of schema's;

`schemas: [CUSTOM_ELEMENTS_SCHEMA]`


## main

`main.ts` is where we define the tf-core-components collection so we can use them freely throughout the app without further imports. It's done here as it's a convienient place to add once during the bootstrapping of the application. tf-core-components comes with a main function defineCustomElements() which allows this;

Import the method into main.ts;

`import { defineCustomElements } from 'tf-core-components/loader'`

add the method in main.ts;

`defineCustomElements(window)`

## Edge and IE11 polyfills

If the application needs to work on older browsers, the defineCustomElements() function should be surrounded by the applyPolyfills() method.

`import { applyPolyfills, defineCustomElements } from 'tf-core-components/loader';`

...

`applyPolyfills().then(() => {
  defineCustomElements()
})`

Don't forget to add the angular polyfills to your project in the usual way.

You will also need additional styles, see the Global Styles section of this readme.

## Font

The components are designed around the font `Roboto Condensed`. This font isn't shipped with the components and needs to be added.

in `index.html` add;

`<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet">`


## global CSS

To get the components sitting nicely on the page and to set the font, we need to include the following base css. This is added to `styles.css`;

```css
html {
	box-sizing: border-box;
}
*, *:before, *:after {
	box-sizing: inherit;
}
body {
	padding: 0;
	margin: 0;
	font-family: 'Roboto Condensed', sans-serif;
	background-color: #224595;
	width: 100%;
	height: 100vh;
}
```

If the application needs to be used on EDGE/IE11 then additional 'helper' style class selectors need to be included. These are:

```css
.tf-ie-slot-fx-fix{
	display: block;
	width: 100%;
	height:100%;
}
.tf-hostroot-flex{
	display:flex;
	flex:1 1 0%;
}
```

# Forms

Out of the box, we can not use the angular formControl or ngModel directive directly on a transform input component like we do with native form elements. This is because the form directives need to access direct native DOM properties. Transform components are build on the shadow DOM and wrapped in the 'tf-...' tag.

To get around this, we have provided a wrapper for each form component. These wrappers are packaged up in https://www.npmjs.com/package/tf-ng-form-components and should be installed once you install the tf-core-components

`npm i tf-ng-form-components`

Once installed, we just add the TfNgFormComponentsModule to the app.module as usual;

`import { TfNgFormComponentsModule } from 'tf-ng-form-components'`

and add the TfNgFormComponentsModule to the imports;

`imports: [
		TfNgFormComponentsModule,
		...
  ]`

using the ... is as simple as just accessing the `tf-ng-input` component instead of `tf-input` in our forms

## Reactive Forms

A ControlValueAccessor acts as a bridge between the Angular forms API and a native element in the DOM

https://angular.io/api/forms/ControlValueAccessor#description

We have created an angular custom input (tf-ng-input) to wrap our form transform components and then use the formControl directive on it. Now, the data can flow two-way between Transform form components and angular form

There is an example reative form page to show the tf-ng-input component working


## Template Forms

We can use the tf-ng-input within the NgForm directive too.

Failing the use of tf-ng-input within NgForm, you can use the raw, unwrapped transform form components but we need to add a few properties;

enforce ngDefaultControl onto tf-input components to bridge the communication from angular to the component. Also need to manually set touched and untouched properties (for now) with (change)="name.control.markAsTouched()"

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag OR `npm run prod` for a production build.

I needed to update package.json to allow building with Schema's. Replace the angular-devkit/build-angular in devDependencies
`"@angular-devkit/build-angular": "^0.12.4"`








npm install classlist.js --save
npm install promise-polyfill --save-exact

add to polyfil...
import 'core-js/es6/promise';