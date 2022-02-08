import { getArea } from "./area";

const PI_NUM = Math.PI;

enum Figure {
  circle = "circle",
  rectangle = "rectangle",
  triangle = "triangle",
}

interface CircleArea {
  type: Figure.circle;
  pi: number;
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
  pi: PI_NUM,
  radius: 4,
};

let rectangle: RectangleArea = {
  type: Figure.rectangle,
  length: 11,
  width: 7,
};

let triangle: TriangleArea = {
  type: Figure.triangle,
  height: 4,
  base: 20,
};

getArea(triangle);
getArea(circle);
getArea(rectangle);

export { Shape };
