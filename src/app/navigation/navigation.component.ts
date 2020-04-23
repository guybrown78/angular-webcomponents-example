import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
		private router: Router,
	) { }

  ngOnInit() {
  }

	// Listen to all tfRouterLinkClicked events that are emited from the parent tf-side-drawer-nav. Each tf-side-drawer-nav-link and tf-side-drawer-nav-link can emit this event if "router-link" prop is set. The Event Bubbles up and can be collected in one handler
	onRouterNavClicked(event){
		this.router.navigate([event.detail.routerLink]);
	}

	// Listen to only a single tfRouterLinkClicked event that is emited from a tf-side-drawer-nav-link or tf-side-drawer-nav-link. If an event handler is used for like this, the event won't be bubbled up
	onRouterNavLinkedClicked(event){
		console.log("tfRouterLinkClicked handled on a link rather than the parent nav");
		this.router.navigate([event.detail.routerLink]);
	}
}
