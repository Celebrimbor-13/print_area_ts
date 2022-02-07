import { getArea } from "./area";

enum Figure {
  circle = "circle",
  rectangle = "rectangle",
  triangle = "triangle",
}

interface CircleArea {
  type: Figure.circle;
  pi: 3.14;
  radius: number;
}

interface RectangleArea {
  type: Figure.rectangle;
  length: number;
  width: number;
}

interface TriangleArea {
  type: Figure.triangle;
  height: number;
  base: number;
}

type Shape = CircleArea | RectangleArea | TriangleArea;

let circle: CircleArea = {
  type: Figure.circle,
  pi: 3.14,
  radius: 5,
};

let rectangle: RectangleArea = {
  type: Figure.rectangle,
  length: 10,
  width: 15,
};

let triangle: TriangleArea = {
  type: Figure.triangle,
  height: 15,
  base: 20,
};

getArea(triangle);

export { Shape };
