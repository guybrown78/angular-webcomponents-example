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
      name: ['', Validators.required]
    });
  }

	ngOnInit(): void {}
	
	get name() { return this.form.get('name'); }

	onSubmit(){
		console.log("submit")
		console.log(this.form)
	}
}
