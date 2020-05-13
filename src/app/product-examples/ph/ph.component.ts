import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ph',
  templateUrl: './ph.component.html',
  styleUrls: ['./ph.component.css']
})
export class PhComponent implements OnInit {

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
