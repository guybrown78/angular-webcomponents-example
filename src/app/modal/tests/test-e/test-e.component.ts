import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-e',
  templateUrl: './test-e.component.html',
  styleUrls: ['./test-e.component.css']
})
export class TestEComponent implements OnInit {

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
