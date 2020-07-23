import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ph',
  templateUrl: './ph.component.html',
  styleUrls: ['./ph.component.css']
})
export class PhComponent implements OnInit {
	activeProducts = [
		{
			id:"bi",
			name:"Business intelligence",
			code:"Bi",
			description:"Lorum ipsum solar dolar jhs description of product bla vle jsi dhdjhdlh management system ipsumly fapher epsom doups",
		},
		{
			id:"si",
			name:"Simulators",
			code:"Si",
			description:"Lorum ipsum solar dolar jhs description of product bla vle jsi dhdjhdlh management system ipsumly fapher epsom doups",
		},
		{
			id:"cm",
			name:"Competence Management",
			code:"CM",
			description:"Lorum ipsum solar dolar jhs description of product bla vle jsi dhdjhdlh management system ipsumly fapher epsom doups",
		},
		{
			id:"tm",
			name:"Training Management",
			code:"TM",
			description:"Lorum ipsum solar dolar jhs description of product bla vle jsi dhdjhdlh management system ipsumly fapher epsom doups",
		},
		{
			id:"lm",
			name:"Learning Management",
			code:"LM",
			description:"Lorum ipsum solar dolar jhs description of product bla vle jsi dhdjhdlh management system ipsumly fapher epsom doups",
		}
	];

  constructor() { }

  ngOnInit() {
  }

	onProductClicked(event){
		console.log(`Product clicked, productTitle is ${event.detail.productTitle} and productId is ${event.detail.productId}`);
	}

	onProductCtaClicked(event){
		console.log(`Product 'find out more' cta clicked, productTitle is ${event.detail.productTitle} and productId is ${event.detail.productId}`);
	}

}
