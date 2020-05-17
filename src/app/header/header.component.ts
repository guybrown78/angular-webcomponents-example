import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	signOutConfirmationOpened:boolean = false;
  constructor() { }

  ngOnInit() {
	}
	
	onQuicklinkOptionSelected(event){
		const { value } = event.detail;
		console.log(`onQuicklinkOptionSelected - singular dropdown event emiited from the quicklink dropdown component. This can be used to call methods within a component, goto routes etc. Value selected is ${value}`)
	}

	onUserAccountItemSelected(event){
		console.log(event.detail);
		if(event.detail.value === "userAccount"){
			// go to user account page
			console.log("go to user account page")
		}else if(event.detail.value === "signOut"){
			this.signOutConfirmationOpened = true;
		}
	}

	tfModalConfirmedHandler(event){
		console.log("Log Out confirmed, end the users session")
		this.signOutConfirmationOpened = false;
	}
	tfModalClosedHandler(event){
		console.log("modal closed")
		this.signOutConfirmationOpened = false;
	}

}
