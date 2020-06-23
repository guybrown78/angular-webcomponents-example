import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.css']
})
export class TestAComponent implements OnInit {

	@ViewChild("modalTest") tfModal;
  constructor() {}

  ngOnInit() {
  }



}
