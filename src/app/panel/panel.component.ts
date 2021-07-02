import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Output() erase = new EventEmitter<void>();
  @Output() shapeChanged = new EventEmitter<number>();
  @Output() colorChanged = new EventEmitter<number>();
  showColorPicker = false;

  shapeIcons = [
    'checkbox-unchecked',
    'circle',
    'star-empty',
    'hexagon'
  ];
  shapeIndex = 0;
  shapeColor = 1;

  constructor() { }

  ngOnInit(): void {
  }

  changeShape(index: number){
    this.shapeIndex = index;
    this.shapeChanged.emit(this.shapeIndex);
  }

  changeColor(color: number){
    this.shapeColor = color;
    this.colorChanged.emit(this.shapeColor);
    this.showColorPicker = false;
  }

  onErase() {
    this.erase.emit();
  }

  togglePicker() {
    this.showColorPicker = !this.showColorPicker;
  }

}
