import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { ExampleComponent } from './example/example.component'; 
import { LoginComponent } from './login/login.component'; 
import { ReactiveLoginComponent } from './login/reactive-login/reactive-login.component'; 
const routes: Routes = [
	{ 
		path: '', 
		component: ExampleComponent, 
		data: {} 
	},
	{ 
		path: 'login', 
		component: LoginComponent, 
		data: {} 
	},
	{ 
		path: 'reactive-login', 
		component: ReactiveLoginComponent, 
		data: {} 
	},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
