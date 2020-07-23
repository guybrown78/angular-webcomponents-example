import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-create-course",
  templateUrl: "./create-course.component.html",
  styleUrls: ["./create-course.component.css"],
})
export class CreateCourseComponent implements OnInit {
  courseTypes = [
    { name: "None", value: 0 },
    { name: "ELearning", value: 1 },
    { name: "VLearning", value: 2 },
	];
	
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({ 
			name: ['Default Name', Validators.required],
			desc: ['', Validators.compose([
				Validators.required,
				Validators.minLength(10)
			])],
			type: ['1', Validators.required],
			isSignedOff: [false, Validators.requiredTrue],
			courseEnabled: [true],
			status: ['pending', Validators.required]
    });
  }

	ngOnInit(): void {}
	
	get name() { return this.form.get('name'); }
	get desc() { return this.form.get('desc'); }
	get type() { return this.form.get('type'); }
	get isSignedOff() { return this.form.get('isSignedOff'); }
	get courseEnabled() { return this.form.get('courseEnabled'); }
	get status() { return this.form.get('status'); }

	onSubmit(){
		console.log("submit")
		console.log(this.form)
	}
}
