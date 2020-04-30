import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

	form: FormGroup;

	fieldControls: any = {};

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', 
        Validators.required, 
        PasswordValidators.validOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  ngOnInit() {
  }

	get oldPassword() { 
		console.log("!!!!!!get old password")
		console.log(this.form.get('oldPassword'));
		return this.form.get('oldPassword'); 
	}
  get newPassword() { return this.form.get('newPassword'); }
	get confirmPassword() { return this.form.get('confirmPassword'); }
	
	getControl(controlName:string) {
    return this.form.get('oldPassword');	
	}
	
}
