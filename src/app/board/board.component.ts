import { Component, OnInit } from '@angular/core';
import { Point } from '../models/point';
import { Shape } from '../models/shape';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  shapes: Shape[] = [];
  drawStarted: boolean = false;
  currentIndex: number = 0;
  currentShape: number = 0;
  currentColor: number = 1;

  constructor() { }

  ngOnInit(): void {

  }

  onMouseDown($event: MouseEvent){
    const start = {
      x: $event.x,
      y: $event.y,
    }
    const end = {
      x: $event.x,
      y: $event.y,
    }
    this.addShape(start, end);
    this.currentIndex = this.shapes.length - 1;
    this.drawStarted = true;
  }

  onMouseUp($event: MouseEvent){
    this.drawStarted = false;
  }

  onMouseMove($event: MouseEvent){
    if (this.drawStarted){
      let end = {
        x: $event.x,
        y: $event.y,
      }
      this.shapes[this.currentIndex].end = end;
    }
  }

  onErase() {
    this.shapes = [];
  }

  onShapeChanged(index: number){
    this.currentShape = index;
  }

  onColorChanged(color: number){
    this.currentColor = color;
  }

  addShape(start: Point, end: Point) {
    let shape = this.getShape(
      start.x,
      start.y,
      end.x,
      end.y,
    );
    this.shapes.push(shape);
  }

  getShape(x1: number, y1: number, x2: number, y2: number){
    return {
      start: {
        x: x1,
        y: y1,
      },
      end: {
        x: x2,
        y: y2,
      },
      shapeType: this.currentShape,
      shapeColor: this.currentColor,
    };
  }

}