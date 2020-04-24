import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { ExampleComponent } from './example/example.component'; 
// forms
import { InputsComponent } from './inputs/inputs.component'
import { LoginComponent } from './login/login.component'; 
import { DecoupledLoginComponent } from './login/decoupled-login/decoupled-login.component'; 
// elements
import { ButtonsComponent } from './elements/buttons/buttons.component';
import { DropdownsComponent } from './elements/dropdowns/dropdowns.component'

const routes: Routes = [
	{ 
		path: '', 
		component: ExampleComponent, 
		data: {} 
	},
	{ 
		path: 'inputs', 
		component: InputsComponent, 
		data: {} 
	},
	{ 
		path: 'login', 
		component: LoginComponent, 
		data: {} 
	},
	{ 
		path: 'decoupled-login', 
		component: DecoupledLoginComponent, 
		data: {} 
	},
	{ 
		path: 'buttons', 
		component: ButtonsComponent, 
		data: {} 
	},
	{ 
		path: 'dropdowns', 
		component: DropdownsComponent, 
		data: {} 
	},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
