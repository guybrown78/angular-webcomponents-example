import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

	testTitle:string = "";
	currentTab:string = "";
  constructor() { }

  ngOnInit() {
  }

	onTabSelect(tab){
		this.currentTab = tab;
		this.testTitle = "Tab Test " + this.currentTab;
	}
}
