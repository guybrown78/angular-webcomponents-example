import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-d',
  templateUrl: './test-d.component.html',
  styleUrls: ['./test-d.component.css']
})
export class TestDComponent implements OnInit {


	mo:boolean = false;	

  constructor() { }

  ngOnInit() {
  }

	onModalClicked(){
		console.log(`launch test modal d`);
		this.mo = true;
	}


	tfModalClosedHandler(){
		console.log("modal closed d	")
		this.mo = false;
	}

}
