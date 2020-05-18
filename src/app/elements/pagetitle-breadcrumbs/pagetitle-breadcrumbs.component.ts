import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetitle-breadcrumbs',
  templateUrl: './pagetitle-breadcrumbs.component.html',
  styleUrls: ['./pagetitle-breadcrumbs.component.css']
})
export class PagetitleBreadcrumbsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	onRouterLinkClicked(event){
		console.log(`Router link clicked, atcivate an application route ${event.detail.routerLink}`)
	}

	onBackButtonClicked(){
		console.log("back button is clicked, do something... ")
	}
}
