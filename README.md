
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

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag OR `npm run prod` for a production build.

I needed to update package.json to allow building with Schema's. Replace the angular-devkit/build-angular in devDependencies
`"@angular-devkit/build-angular": "^0.12.4"`
