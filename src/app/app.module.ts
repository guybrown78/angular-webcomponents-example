import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { TfNgFormComponentsModule } from 'tf-ng-form-components'
// pages
import { ExampleComponent } from './example/example.component'; 
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveLoginComponent } from './login/reactive-login/reactive-login.component';
import { DecoupledLoginComponent } from './login/decoupled-login/decoupled-login.component';
import { InputsComponent } from './inputs/inputs.component';
import { ButtonsComponent } from './elements/buttons/buttons.component';
import { DropdownsComponent } from './elements/dropdowns/dropdowns.component';
import { ModalComponent } from './modal/modal.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { CardsComponent } from './cards/cards.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodeFlexComponent } from './node-flex/node-flex.component';
import { ListsComponent } from './lists/lists.component';
import { TableComponent } from './table/table.component';
import { ExampleTwoComponent } from './pages/example-two/example-two.component';
import { ExampleOneComponent } from './pages/example-one/example-one.component';
import { ExampleThreeComponent } from './pages/example-three/example-three.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { NgformComponent } from './pages/ngform/ngform.component';
import { CreateCourseComponent } from './example/create-course/create-course.component';
import { AddLocationComponent } from './example/add-location/add-location.component';
import { PhComponent } from './product-examples/ph/ph.component';
import { NodeRowComponent } from './node-row/node-row.component';
import { AlertComponent } from './feedback/alert/alert.component';
import { PagetitleBreadcrumbsComponent } from './elements/pagetitle-breadcrumbs/pagetitle-breadcrumbs.component';
import { TypographyComponent } from './design-system/typography/typography.component';
import { ColourPalleteComponent } from './design-system/colour-pallete/colour-pallete.component';
import { BrowserIconsComponent } from './design-system/browser-icons/browser-icons.component';
import { ProductLogosComponent } from './design-system/product-logos/product-logos.component';
import { IconsComponent } from './elements/icons/icons.component';
import { ExampleFourComponent } from './pages/example-four/example-four.component';
import { AppHeaderComponent } from './elements/app-header/app-header.component';
import { TestsComponent } from './modal/tests/tests.component';
import { TestAComponent } from './modal/tests/test-a/test-a.component';
import { TestBComponent } from './modal/tests/test-b/test-b.component';
import { TestCComponent } from './modal/tests/test-c/test-c.component';
import { TestDComponent } from './modal/tests/test-d/test-d.component';
import { TestEComponent } from './modal/tests/test-e/test-e.component';
import { StatusesComponent } from './elements/statuses/statuses.component';
import { SearchComponent } from './search/search.component';
import { TestCheckboxComponent } from './do-not-use/test-checkbox/test-checkbox.component';
import { TestRadioGroupComponent } from './do-not-use/test-radio-group/test-radio-group.component';
import { StatsComponent } from './elements/stats/stats.component';
import { TestFileSelectComponent } from './do-not-use/test-file-select/test-file-select.component';
import { FileSelectComponent } from './form-elements/file-select/file-select.component';




@NgModule({
  declarations: [
		AppComponent,
		ExampleComponent,
		LoginComponent,
		NavigationComponent,
		HeaderComponent,
		ReactiveLoginComponent,
		DecoupledLoginComponent,
		InputsComponent,
		ButtonsComponent,
		DropdownsComponent,
		ModalComponent,
		LayoutsComponent,
		FormElementsComponent,
		CardsComponent,
		NodesComponent,
		NodeFlexComponent,
		ListsComponent,
		TableComponent,
		ExampleTwoComponent,
		ExampleOneComponent,
		ExampleThreeComponent,
		ReactiveFormComponent,
		NgformComponent,
		CreateCourseComponent,
		AddLocationComponent,
		PhComponent,
		NodeRowComponent,
		AlertComponent,
		PagetitleBreadcrumbsComponent,
		TypographyComponent,
		ColourPalleteComponent,
		BrowserIconsComponent,
		ProductLogosComponent,
		IconsComponent,
		ExampleFourComponent,
		AppHeaderComponent,
		TestsComponent,
		TestAComponent,
		TestBComponent,
		TestCComponent,
		TestDComponent,
		TestEComponent,
		StatusesComponent,
		SearchComponent,
		TestCheckboxComponent,
		TestRadioGroupComponent,
		StatsComponent,
		TestFileSelectComponent,
		FileSelectComponent,
  ],
  imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		TfNgFormComponentsModule
  ],
  providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
