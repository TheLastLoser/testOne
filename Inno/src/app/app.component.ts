import { Component, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';

import * as CanvasJS from '../assets/canvasjs.min';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['canvas { border-style: solid }']
})
export class AppComponent implements OnInit {


  constructor() {}

  ngOnInit() {
  let content  = require('../assets/configs/cnvr0100.json');

  let arrays = content[2].data;
	let dataPoints1 = [];
	for ( var i = 0; i < 56; i++ ) {
    dataPoints1.push({ y: parseInt(arrays[i].Data), x: new Date(String(arrays[i].New_Time))});
	}
  let dataPoints2 = [];
	for ( var i = 56; i < 86; i++ ) {
    dataPoints2.push({ y: parseInt(arrays[i].Data), x: new Date(String(arrays[i].New_Time))});
	}
	let chart = new CanvasJS.Chart("chartContainer", {
		title: {
			text: "InnoLux Fab2"
		},
		subtitles:[{
			text: "Try Zooming and Panning"
		}],
		data: [
		{
			type: "line",
      name:"CNVR0100",
      showInLegend: true,
			dataPoints: dataPoints1
		},
    {
      name:"CNVR0128",
			type: "line",
      showInLegend: true,
			dataPoints: dataPoints2
		},
  ],
  zoomEnabled: true,
  animationEnabled: true,
  exportEnabled: true
	});

	chart.render();
    }
}
