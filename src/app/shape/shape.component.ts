import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Point } from '../models/point';
import { Shape } from '../models/shape';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit, OnChanges {

  @Input() start: Point;
  @Input() end: Point;
  nativeElement: HTMLElement;

  constructor(private element: ElementRef) {

    this.nativeElement = <HTMLElement>this.element.nativeElement;

    this.start = {
      x: 0,
      y: 0,
    };

    this.end = {
      x: 0,
      y: 0
    }

  }

  ngOnInit(): void {
    
    this.nativeElement.classList.add('shape');
    this.setCoordinates();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.end){
      this.updateDimensions();
    }
  }

  updateDimensions() {

    

    const { x, y } = this.start;
    let left = Math.min(x, this.end.x);
    let top = Math.min(y, this.end.y);
    
    const width = Math.abs(this.end.x - x);
    const height = Math.abs(this.end.y - y);
    this.nativeElement.style.top = `${top}px`;
    this.nativeElement.style.left = `${left}px`;
    this.nativeElement.style.width = `${width}px`;
    this.nativeElement.style.height = `${height}px`;
  }

  setCoordinates() {
    const { x, y } = this.start;
    const width = this.end.x - x;
    const height = this.end.y - y;
    this.nativeElement.style.top = `${y}px`;
    this.nativeElement.style.left = `${x}px`;
    this.nativeElement.style.width = `${width}px`;
    this.nativeElement.style.height = `${height}px`;
  }

}
