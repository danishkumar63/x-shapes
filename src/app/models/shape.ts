import { Point } from "./point";

export interface Shape {
    shapeType: number;
    shapeColor: number;
    start: Point;
    end: Point;
}