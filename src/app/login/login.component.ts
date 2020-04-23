import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	onLoginSuccess(event){
		const responseJSON = event.detail;
		console.log(`Login success. The token in ResponseJSON from server is: ${responseJSON.token}`);
	}
}
