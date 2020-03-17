import { Component, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import * as CanvasJS from '../assets/canvasjs.min';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['canvas { border-style: solid }']
})
export class AppComponent implements OnInit {
  @ViewChild('canvas01', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  requestId;
  interval;
  squares: Square[] = [];

  constructor(private ngZone: NgZone){}



  // ngOnInit() {
    // this.ctx = this.canvas.nativeElement.getContext('2d');
    // this.ctx.fillStyle = 'red';
    // this.ngZone.runOutsideAngular(() => this.tick());
    // setInterval(() => {
    //   this.tick();
    // }, 600);


  //   let chart = new CanvasJS.Chart("chartContainer", {
	// 	animationEnabled: true,
	// 	exportEnabled: true,
	// 	title: {
	// 		text: "Basic Column Chart in Angular"
	// 	},
	// 	data: [{
	// 		type: "column",
	// 		dataPoints: [
	// 			{ y: 71, label: "Apple" },
	// 			{ y: 55, label: "Mango" },
	// 			{ y: 50, label: "Orange" },
	// 			{ y: 65, label: "Banana" },
	// 			{ y: 95, label: "Pineapple" },
	// 			{ y: 68, label: "Pears" },
	// 			{ y: 28, label: "Grapes" },
	// 			{ y: 34, label: "Lychee" },
	// 			{ y: 14, label: "Jackfruit" }
	// 		]
	// 	}]
	// });


  // tick() {
  //   this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  //   this.squares.forEach((square: Square) => {
  //     square.moveRight();
  //   });
  //   this.requestId = requestAnimationFrame(() => this.tick);
  // }
  //
  // play() {
  //   const square = new Square(this.ctx);
  //   this.squares = this.squares.concat(square);
  // }
  //
  // ngOnDestroy() {
  //   clearInterval(this.interval);
  //   cancelAnimationFrame(this.requestId);
  // }
  ngOnInit() {
	let dataPoints = [];
	let y = 0;
	for ( var i = 0; i < 10000; i++ ) {
		y += Math.round(5 + Math.random() * (-5 - 5));
		dataPoints.push({ y: y});
	}
	let chart = new CanvasJS.Chart("chartContainer", {
		zoomEnabled: true,
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Performance Demo - 10000 DataPoints"
		},
		subtitles:[{
			text: "Try Zooming and Panning"
		}],
		data: [
		{
			type: "line",
			dataPoints: dataPoints
		}]
	});

	chart.render();
    }
}

export class Square {
  private color = 'red';
  private x = 0;
  private y = 0;
  private z = 30;

  constructor(private ctx: CanvasRenderingContext2D) {}

  moveRight() {
    this.x++;
    this.draw();
  }

  private draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.z * this.x, this.z * this.y, this.z, this.z);
  }
}
