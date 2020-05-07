import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

	addLocationForm: FormGroup;
	locationForm: FormGroup;

  constructor( public formBuilder: FormBuilder ) { }

  ngOnInit() {
		this.initialiseForm();
		this.initialiseLocationForm()
  }

	// addLocationForm
	private initialiseForm(): void {
    this.addLocationForm = this.formBuilder.group({
      name: ['test',[ Validators.required, Validators.maxLength(256)]],
		  addressLine1: ['highstreet',[ Validators.required, Validators.maxLength(256)]],
      addressLine2: ['line 2', Validators.maxLength(256)],
      region: ['north', [Validators.required, Validators.maxLength(256)]],
		  city: ['wallsend', [Validators.required, Validators.maxLength(256)]],
		  country: ['uk', [Validators.required, Validators.maxLength(256)]],
		  postcode: ['ne28 9rh', [Validators.required, Validators.maxLength(256)]]
    })
	}

	onSubmit(): void {
    if(this.addLocationForm.valid) {
      this.createLocation();
    } else {
      //TODO SEND MESSAGE BACK TO TEMPLATE
    }
	}

	private createLocation(): void {
    console.log(this.addLocationForm.value)
	}
	// ------------------------------------------

	// locationForm
	private initialiseLocationForm(): void {
    this.locationForm = this.formBuilder.group({
      name: ['test',[ Validators.required, Validators.maxLength(256)]],
		  addressLine1: ['highstreet',[ Validators.required, Validators.maxLength(256)]],
      addressLine2: ['line 2', Validators.maxLength(256)],
      region: ['north', [Validators.required, Validators.maxLength(256)]],
		  city: ['wallsend', [Validators.required, Validators.maxLength(256)]],
		  country: ['uk', [Validators.required, Validators.maxLength(256)]],
		  postcode: ['ne28 9rh', [Validators.required, Validators.maxLength(256)]]
    })
  }
	onLocationFormSubmit(): void {
    console.log(this.locationForm.value)
	}
	
}
