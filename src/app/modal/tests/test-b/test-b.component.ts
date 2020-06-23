import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-b',
  templateUrl: './test-b.component.html',
  styleUrls: ['./test-b.component.css']
})
export class TestBComponent implements OnInit {

	@ViewChild("modalTest") tfModal;
  constructor() {}

  ngOnInit() {
  }

	onModalClicked(){
		console.log(`launch test modal`);
		console.log(this.tfModal)
		// this.tfModal.nativeElement.open();
	}


	tfModalClosedHandler(){
		console.log("modal closed")
	}

}
