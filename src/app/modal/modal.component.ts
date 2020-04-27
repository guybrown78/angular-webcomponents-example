import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	opened:boolean = false;	
  constructor() { }
  ngOnInit() {
  }

	onButtonClicked(event){
		console.log(`launch modal`);
		this.opened = true;
	}

	tfModalConfirmedHandler(event){
		console.log("modal confirmed")
		this.opened = false;
	}
	tfModalClosedHandler(event){
		console.log("modal closed")
		this.opened = false;
	}
}
