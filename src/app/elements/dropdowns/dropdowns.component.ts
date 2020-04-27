import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {

  constructor(
		private router: Router,
	) { }

  ngOnInit() {
  }

	onLeftDropdownClicked(event){
		const { routerLink } = event.detail;
		console.log(`onLeftDropdownClicked - individual event emitted if the router link is present (overrides href). Used in Angular for router functionality. Event is triggered from link component but can be caught from the parent dropdown as the link event bubbles. The routerLink from the event is ${routerLink}`)
		//
		if(routerLink !== "/")
			this.router.navigate([routerLink]);
	}

	onDropdownOptionSelected(event){
		const { value } = event.detail;
		console.log(`onDropdownOptionSelected - singular dropdown event emiited from the parent dropdown component. This can be used to call methods within a component. Value selected is ${value}`)
	}

}
