import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	signOutConfirmationOpened:boolean = false;
	userAccountMenuItems:any;
	// userAccountMenuItemsStringified:string;
	headerData:boolean = false;
	showUserAccountMenu:boolean = false;
	JSON:any;
  constructor() {
		this.userAccountMenuItems = [
			{label:'My Account', value:'userAccount'},
			{label:'Settings', value:'userSettings'},
			{label:'Sign Out',value:'signOut'}
		];
		this.JSON = JSON;
		// this.userAccountMenuItemsStringified = JSON.stringify(this.userAccountMenuItems)
	}

  ngOnInit() {
		this.showUserAccountMenu = true;
		this.headerData = true;
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
		this.userAccountMenuItems = [
			{label:'Sign In',value:'signIn'}
		];
		// this.userAccountMenuItemsStringified = JSON.stringify(this.userAccountMenuItems)
		// console.log(this.userAccountMenuItemsStringified)
		this.signOutConfirmationOpened = false;
		// this.headerData = false;
	}
	tfModalClosedHandler(event){
		console.log("modal closed")
		this.signOutConfirmationOpened = false;
		
	}

}
