import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	navigationData = [
		{
			label:"Forms",
			title:"",
			hasSub:true,
			subItems:[
				{
					routerLink:"/inputs",
					title:"Form input components",
					label:"Input Form Components"
				},
				{
					routerLink:"/form-elements",
					title:"Form components",
					label:"Other Form Components"
				},
				{
					routerLink:"/login",
					title:"Opinionated Login Form",
					label:"Login form"
				},
				{
					routerLink:"/decoupled-login",
					title:"Decoupled login form example",
					label:"Decoupled login form"
				},
				{
					routerLink:"/ngform",
					title:"Angular Template Form (ngForm)",
					label:"Template Form"
				},
				{
					routerLink:"/reactive-form",
					title:"Angular Reactive Form (FormGroup, FormBuilder, Validators)",
					label:"Reactive Form"
				},
			]
		},
		{
			label:"Elements",
			title:"",
			hasSub:true,
			subItems:[
				{
					routerLink:"/title-breadcrumbs",
					title:"Page Title and Breadcrumbs",
					label:"Page Title / Breadcrumbs"
				},
				{
					routerLink:"/buttons",
					title:"Simple button components",
					label:"Buttons"
				},
				{
					routerLink:"/icons",
					title:"Available svg icons",
					label:"Icons"
				},
				{
					routerLink:"/dropdowns",
					title:"Simple dropdown components",
					label:"Dropdown"
				},
			]
		},
		{
			label:"Page Layouts",
			title:"",
			hasSub:true,
			subItems:[
				{
					routerLink:"/cards",
					title:"Card layout examples",
					label:"Cards"
				},
				{
					routerLink:"/nodes",
					title:"Nodes elements examples",
					label:"node"
				},
				{
					routerLink:"/node-flex",
					title:"Node-flex examples",
					label:"Node-flex"
				},
				{
					routerLink:"/node-row",
					title:"Node Responsive Row examples",
					label:"Node Responsive Row"
				},
				{
					routerLink:"/lists",
					title:"List examples",
					label:"Lists"
				},
				{
					routerLink:"/tables",
					title:"Table examples",
					label:"Tables"
				},
			]
		},
		{
			routerLink:"/modals",
			title:"Modals pop-up components",
			label:"Modals",
			hasSub:false,
			subItems:null
		},
		{
			label:"Feedback",
			title:"",
			hasSub:true,
			subItems:[
				{
					routerLink:"/alerts",
					title:"Feedback - alerts",
					label:"Alerts"
				}
			]
		},
		{
			label:"Example Pages",
			title:"",
			hasSub:true,
			subItems:[
				{
					routerLink:"/",
					title:"",
					label:"Page one"
				},
				{
					routerLink:"/example-two",
					title:"",
					label:"Page Two"
				},
				{
					routerLink:"/example-three",
					title:"",
					label:"Page Three"
				},
				{
					routerLink:"/example-four",
					title:"",
					label:"Page Four"
				},
				{
					hrefLink:"https:www.neutronvr.com",
					title:"Visit NeutronVR's website",
					label:"External HREF link"
				},
			]
		},
		{
			label:"Product Pages",
			title:"",
			hasSub:true,
			subItems:[
				{
					routerLink:"/product-hub",
					title:"Product Hub Components",
					label:"Product Hub"
				}
			]
		},
		{
			label:"Design System",
			title:"",
			hasSub:true,
			subItems:[
				{
					routerLink:"/colour-pallete",
					title:"Colour Pallete",
					label:"Colour Pallete"
				},
				{
					routerLink:"/typography",
					title:"Typography",
					label:"Typography"
				},
				{
					routerLink:"/product-logos",
					title:"Product Logos",
					label:"Product Logos"
				},
				{
					routerLink:"/browser-icons",
					title:"Broswer Icons & Page Titles",
					label:"Broswer Icons & Page Titles"
				},
			]
		},
	]



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
