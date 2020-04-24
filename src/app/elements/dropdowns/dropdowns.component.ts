import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	onLeftDropdownClicked(event){
		console.log("onLeftDropdownClicked")
		console.log(event)
	}
}
