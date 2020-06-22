import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	modalOpened:boolean = false;	
	modalTestOpened:boolean=true;
	alertModalOpened:boolean = false;	
  constructor() { }
  ngOnInit() {
  }

	onModalClicked(event){
		console.log(`launch modal`);
		this.modalOpened = true;
	}

	onModalTestClicked(event){
		console.log(`launch test modal`);
		this.modalTestOpened = true;
	}

	onAlertModalClicked(event){
		console.log(`launch alert modal`);
		this.alertModalOpened = true;
	}

	tfModalConfirmedHandler(event){
		console.log("modal confirmed")
		this.modalOpened = false;
	}
	tfModalClosedHandler(event){
		console.log("modal closed")
		this.modalOpened = false;
		this.modalTestOpened = false;
	}

	tfAlertModalConfirmedHandler(event){
		console.log("alert modal closed")
		this.alertModalOpened = false;
	}
}
