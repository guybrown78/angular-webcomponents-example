import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	onStandardAlertClicked(){
		const tfShowAlert = new CustomEvent('tfShowAlert', { 
			detail:{
				message:'Aenean egestas ante mauris, ut feugiat quam congue sed. Sed vehicula auctor ante, vitae bibendum lacus malesuada vel. Aenean at.',
			},
			bubbles: true,
		});
		document.body.dispatchEvent(tfShowAlert);
	}

	onConfirmAlertClicked(){
		const confrimAlertEvent = new CustomEvent('tfShowAlert', { 
			detail:{
				message:"Course added successfully", 
				colour:"green", 
				icon:"check",
				showDuration:"1000"
			},
			bubbles: true,
		});
		document.body.dispatchEvent(confrimAlertEvent);
	}

	onFailedAlertClicked(){
		const confrimAlertEvent = new CustomEvent('tfShowAlert', { 
			detail:{
				message:"Something went wrong. Please try again", 
				colour:"red", 
				icon:"close",
				showDuration:"1000"
			},
			bubbles: true,
		});
		document.body.dispatchEvent(confrimAlertEvent);
	}

}
