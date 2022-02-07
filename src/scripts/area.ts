import { Shape } from "./index";

let circleP = document.getElementById("circle");
let triangleP = document.getElementById("triangle");
let rectangleP = document.getElementById("rectangle");

function getArea(object: Shape) {
  switch (object.type) {
    case "circle":
      circleP.innerText = `Circle area is ${getCircleArea(object.pi, object.radius).toString()}`;
      break;
    case "triangle":
      triangleP.innerText = `Triangle area is ${getTriangleArea(object.base, object.height).toString()}`;
      break;
    case "rectangle":
      rectangleP.innerText = `Rectangle area is ${getRectangleArea(object.width, object.length).toString()}`;
      break;
  }
}

function getRectangleArea(height, width) {
  return height * width;
}

function getTriangleArea(height, base) {
  return (height * base) / 2;
}
function getCircleArea(pi, radius) {
  return pi * Math.pow(radius, 2);
}

export { getArea };
