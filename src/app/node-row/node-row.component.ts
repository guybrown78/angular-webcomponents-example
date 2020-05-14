import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-row',
  templateUrl: './node-row.component.html',
  styleUrls: ['./node-row.component.css']
})
export class NodeRowComponent implements OnInit {
	data = [
		{
			id: 1,
			status: "LIVE",
			code: "CS_001",
			name: "Cold Water Survival",
			registered:164,
			location:"",
			description:"Aenean egestas ante mauris, ut feugiat quam congue sed. Sed vehicula auctor ante, vitae bibendum lacus malesuada vel. Aenean at.",
		},
		{
			id: 2,
			status: "LIVE",
			code: "CS_020",
			name: "Optito Bosiet with CA-EBS",
			registered:98,
			location:"",
			description:"Maecenas varius pulvinar ante sit amet vestibulum. Donec luctus id odio sit amet sollicitudin."
		},
		{
			id: 3,
			status: "LIVE",
			code: "CS_300",
			name: "Course Three",
			registered:12,
			location:"",
			description:"Vestibulum aliquet urna vitae risus ornare laoreet."
		},
		{
			id: 4,
			status: "LIVE",
			code: "CS_444",
			name: "Course Four",
			registered:564,
			location:"",
			description:"Phasellus quis bibendum neque. Ut quis nisi blandit, euismod magna vitae"
		},
		{
			id: 5,
			status: "ARCHIVED",
			code: "CS_505",
			name: "Course Five",
			registered:null,
			location:"",
			description:"In eleifend ultricies turpis, eu scelerisque leo. Sed egestas, erat in tincidunt euismod, ligula justo."
		},
		{
			id: 6,
			status: "LIVE",
			code: "CS_666",
			name: "Course Six",
			registered:10666,
			location:"",
			description:"Proin aliquet lectus sit amet felis sodales sodales. Maecenas rhoncus tortor eu neque ullamcorper, nec."
		}
	];
  constructor() { }

  ngOnInit() {
  }

}
