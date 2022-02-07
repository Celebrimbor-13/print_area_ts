import { Shape } from "./index";

let root = document.getElementById("root");

function getArea(object: Shape) {
  switch (object.type) {
    case "circle":
      root.innerText = `Circle area is ${getCircleArea(object.pi, object.radius).toString()}`;
      break;
    case "triangle":
      root.innerText = `Triangle area is ${getTriangleArea(object.base, object.height).toString()}`;
      break;
    case "rectangle":
      root.innerText = `Rectangle area is ${getRectangleArea(object.width, object.length).toString()}`;
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
