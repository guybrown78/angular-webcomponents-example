import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import "tf-core-components"
@Component({
  selector: 'app-test-c',
  templateUrl: './test-c.component.html',
  styleUrls: ['./test-c.component.css']
})
export class TestCComponent implements OnInit {

	@ViewChild("modalTest") tfModal;
  constructor() {}

  ngOnInit() {
  }

	onModalClicked(){
		console.log(`launch test modal`);
		console.log(this.tfModal)
		this.tfModal.nativeElement.open();
	}


	tfModalClosedHandler(){
		console.log("modal closed")
	}

}
