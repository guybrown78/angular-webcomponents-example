import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NgformComponent implements OnInit {

	values: any = {
		nickname: 'Billy the Kid',
	}
	
  constructor() { }

  ngOnInit() {
		
	}

	onNgSubmit(f){
		//
		console.log("onNgSubmitted")
		console.log(f)
		console.log('dirty',f.dirty, ' - ', 'pristine',f.pristine);
		//
		const nc = f.controls.name;
		console.log(nc)
		console.log('name: dirty', nc.dirty, ' - ', 'name: pristine', nc.pristine);
		//
		const nnc = f.controls.nickname;
		console.log(nnc)
		console.log('name: dirty', nnc.dirty, ' - ', 'name: pristine', nnc.pristine);
		//
	}



}
