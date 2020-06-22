import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-c',
  templateUrl: './test-c.component.html',
  styleUrls: ['./test-c.component.css']
})
export class TestCComponent implements OnInit {


	mo:boolean = false;	

  constructor() { }

  ngOnInit() {
  }

	onModalClicked(){
		console.log(`launch test modal`);
		this.mo = true;
	}


	tfModalClosedHandler(){
		console.log("modal closed")
		this.mo = false;
	}

}
