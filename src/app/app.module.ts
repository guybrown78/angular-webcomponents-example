import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  ],
  imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
  ],
  providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
