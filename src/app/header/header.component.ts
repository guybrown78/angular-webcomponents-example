import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	}
	
	onQuicklinkOptionSelected(event){
		const { value } = event.detail;
		console.log(`onQuicklinkOptionSelected - singular dropdown event emiited from the quicklink dropdown component. This can be used to call methods within a component, goto routes etc. Value selected is ${value}`)
	}

}
