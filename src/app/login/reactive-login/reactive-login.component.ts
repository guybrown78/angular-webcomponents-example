import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {

	error: string = null;
	loading: boolean = false;
	formValid: boolean = false;
	values: any = {
		email:null,
		password:null,
		name:null,
		nickname: 'Billy the Kid',
	}
	// email = 'guy@guy.com';
	

	contactMethods = [
		{id:1, name:'Email'},
		{id:2, name:'Phone'},
	]

  constructor() { }

  ngOnInit() {
		
	}

	formSubmit(f){
		console.log("Can still handle template forms but the input's won't be registered!", f);
	}
	onNgSubmit(f){
		console.log("onNgSubmitted")
		console.log(f)
		console.log('dirty',f.dirty, ' - ', 'pristine',f.pristine);
		console.log('touched',f.touched, ' - ', 'untouched', f.untouched);

		const nc = f.controls.name;
		console.log(nc)
		console.log('name: dirty', nc.dirty, ' - ', 'name: pristine', nc.pristine);
		console.log('name: touched',nc.touched, ' - ', 'name: untouched', nc.untouched);

		const nnc = f.controls.nickname;
		console.log(nnc)
		console.log('name: dirty', nnc.dirty, ' - ', 'name: pristine', nnc.pristine);
		console.log('name: touched',nnc.touched, ' - ', 'name: untouched', nnc.untouched);
	}
	// tfOnInputHandler(event){
	// 	const { id, value } = event.detail;
	// 	// set the current updated input value into the values object
	// 	this.values[id] = value.trim();
	// 	// check if form is valid
	// 	this.formValid = !this.values.email || !this.values.password ? false : this.values.email.length > 0 && this.values.password.length > 0;
	// }

	// onSubmit(){
	// 	// example of 
	// 	this.loading = true;
	// 	setTimeout(() => {
	// 		this.loading = false;
	// 	}, 3000);
	// }

	onForgottenDetailsClick(){
		window.open("", "_blank");
	}



	log(x){
		console.log('>>>',x)
	}

	submit(f){
		console.log(f)
	}

}
