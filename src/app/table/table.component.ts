import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	data = [
		{
			id: 1,
			status: "LIVE",
			code: "CS_001",
			name: "Cold Water Survival",
			registered:164
		},
		{
			id: 2,
			status: "LIVE",
			code: "CS_020",
			name: "Optito Bosiet with CA-EBS",
			registered:98
		},
		{
			id: 3,
			status: "LIVE",
			code: "CS_300",
			name: "Course Three",
			registered:12
		},
		{
			id: 4,
			status: "LIVE",
			code: "CS_444",
			name: "Course Four",
			registered:564
		},
		{
			id: 5,
			status: "ARCHIVED",
			code: "CS_505",
			name: "Course Five",
			registered:null
		},
		{
			id: 6,
			status: "LIVE",
			code: "CS_666",
			name: "Course Six",
			registered:10666
		}
	];
  constructor() { }

  ngOnInit() {
	}
	
	onCourseActionSelected(event){
		const details = event.detail;
		const courseId = Number(details.dropdownId);
		console.log(`onCourseActionSelected - Action selected for course ${courseId}. Action value selected is ${details.value}`);
		console.log(event, courseId, details);
	}

}
