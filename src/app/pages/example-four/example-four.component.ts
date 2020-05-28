import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-four',
  templateUrl: './example-four.component.html',
  styleUrls: ['./example-four.component.css']
})
export class ExampleFourComponent implements OnInit {

	data = [
		{
			id: 1,
			status: "completed",
			code: "f_001",
			name: "Form 001",
			version:1,
			description:"The first form",
		},
		{
			id: 2,
			status: "completed",
			code: "f_002",
			name: "Form 002",
			version:2,
			description:"The second form",
		},
		{
			id: 3,
			status: "incomplete",
			code: "f_003",
			name: "Form 003",
			version:3,
			description:"The third form",
		}
		
	];

  constructor() { }

  ngOnInit() {
  }

	onFormActionSelected(event){
		const details = event.detail;
		const itemId = Number(details.dropdownId);
		const item:any = this.data.filter(a => a.id === itemId)[0];
		console.log(`onFormActionSelected - Action ${details.value} selected for ${item.name}.`);
	}

}
