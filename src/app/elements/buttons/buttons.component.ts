import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	onButtonClicked(event){
		const buttonEl:HTMLElement = event.target;
		console.log(`The button with the ID attribute of "${buttonEl.id}" was clicked`);
	}


}
