import { Component, OnInit } from '@angular/core';
import countries from './countries'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	countryList = [ ...countries ];
	resultsList = [];
  constructor() {
	 }

  ngOnInit() {
  }

	onSearchInput(event){
		const value = event.detail.value.toLowerCase();
		this.resultsList = value.length > 1 
			// if value has 2 or more chars then search
			? [...this.countryList.filter(c => c.name.toLowerCase().includes(value))]
			// else don't bother
			:[];
	}

	onSearchSelected(event){
		console.log("SELECTED", event.detail.value);
		this.resultsList = [];
	}
}
