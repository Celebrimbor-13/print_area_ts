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
  sideOne: number;
  sideTwo: number;
  sideThree: number;
}

type Shape = CircleArea | RectangleArea | TriangleArea;

let circle: Shape = {
  type: Figure.circle,
  pi: PI_NUM,
  radius: 4,
};

let rectangle: Shape = {
  type: Figure.rectangle,
  length: 11,
  width: 7,
};

let triangle: Shape = {
  type: Figure.triangle,
  sideOne: 5,
  sideTwo: 3,
  sideThree: 7,
};

getArea(triangle);
getArea(circle);
getArea(rectangle);

export { Shape, Figure };
