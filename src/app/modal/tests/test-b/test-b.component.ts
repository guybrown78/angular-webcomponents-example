import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-b',
  templateUrl: './test-b.component.html',
  styleUrls: ['./test-b.component.css']
})
export class TestBComponent implements OnInit {


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
