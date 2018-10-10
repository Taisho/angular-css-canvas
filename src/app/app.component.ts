import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  @ViewChild('canvas') public canvas;

  ngOnInit() {
  let context = this.canvas.nativeElement.getContext("2d");
    context.beginPath();
    context.arc(150, 150, 150, 0, 2*Math.PI);

    context.moveTo(150, 150);
    context.lineTo(150, 300);
    context.stroke();
  }
}
