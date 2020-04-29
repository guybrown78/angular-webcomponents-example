import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css']
})
export class ExampleTwoComponent implements OnInit {
	loaded = false;
	data = [
		{
			id: 1,
			code: "CS_001",
			name: "Cold Water Survival",
			registered:164
		},
		{
			id: 2,
			code: "CS_020",
			name: "Optito Bosiet with CA-EBS",
			registered:98
		},
		{
			id: 3,
			code: "CS_300",
			name: "Course Three",
			registered:12
		},
		{
			id: 4,
			code: "CS_444",
			name: "Course Four",
			registered:564
		},
		{
			id: 5,
			code: "CS_505",
			name: "Course Five",
			registered:null
		},
		{
			id: 6,
			code: "CS_666",
			name: "Course Six",
			registered:10666
		}
	];
  constructor() { }

  ngOnInit() {
		if(this.data.length){
			this.loaded = true;
		}
  }

	onCourseActionSelected(event, courseId){
		console.log("ACTION")
		const details = event.detail;
		console.log(`onCourseActionSelected - Action selected for course ${courseId}. Action value selected is ${details.value}`);
		console.log(event, courseId, details);
	}
}
