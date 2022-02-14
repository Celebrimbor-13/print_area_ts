import { Shape, Figure } from "./index";

let circleP = document.getElementById("circle");
let triangleP = document.getElementById("triangle");
let rectangleP = document.getElementById("rectangle");

function getArea(object: Shape) {
  switch (object.type) {
    case Figure.circle:
      circleP.innerText = `Circle area is ${getCircleArea(object.pi, object.radius).toString()}`;
      break;
    case Figure.triangle:
      triangleP.innerText = `Triangle area is ${getTriangleArea(
        object.sideOne,
        object.sideTwo,
        object.sideThree
      ).toString()}`;
      break;
    case Figure.rectangle:
      rectangleP.innerText = `Rectangle area is ${getRectangleArea(object.width, object.length).toString()}`;
      break;
  }
}

function getRectangleArea(height: number, width: number) {
  return height * width;
}

function getTriangleArea(sideOne: number, sideTwo: number, sideThree: number) {
  let semiPerimeter = (sideOne + sideTwo + sideThree) / 2;
  return Math.sqrt(
    semiPerimeter * (semiPerimeter - sideOne) * (semiPerimeter - sideTwo) * (semiPerimeter - sideThree)
  );
}
function getCircleArea(pi: number, radius: number) {
  return pi * Math.pow(radius, 2);
}

export { getArea };
