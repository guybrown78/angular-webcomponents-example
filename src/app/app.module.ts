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
