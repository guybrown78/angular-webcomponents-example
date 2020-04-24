import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decoupled-login',
  templateUrl: './decoupled-login.component.html',
  styleUrls: ['./decoupled-login.component.css']
})
export class DecoupledLoginComponent implements OnInit {

	error: string = null;
	loading: boolean = false;
	formValid: boolean = false;
	values: any = {
		email:null,
		password:null,
	}

  constructor() { }

  ngOnInit() {
		
	}

	formSubmit(f){
		console.log("Can still handle template forms but the input's won't be registered!", f);
	}

	tfOnInputHandler(event){
		const { id, value } = event.detail;
		// set the current updated input value into the values object
		this.values[id] = value.trim();
		// check if form is valid
		this.formValid = !this.values.email || !this.values.password ? false : this.values.email.length > 0 && this.values.password.length > 0;
	}

	onSubmit(){
		// example of 
		this.loading = true;
		setTimeout(() => {
			this.loading = false;
		}, 3000);
	}

	onForgottenDetailsClick(){
		window.open("", "_blank");
	}

}
