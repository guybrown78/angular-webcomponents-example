import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.css']
})
export class TestAComponent implements OnInit {


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
