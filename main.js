import { Rectangle, Circle } from './shapes.js';
import { getRandomNumber } from './random.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const shapes = [];

shapes.push(new Rectangle(50, 50, 'red', 100, 60));
shapes.push(new Circle(200, 200, 'blue', 50));

function drawShapes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  shapes.forEach(shape => shape.draw(ctx));
}

drawShapes();

canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  const randomColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
  const randomWidth = getRandomNumber(20, 100);
  const randomHeight = getRandomNumber(20, 100);
  const randomRadius = getRandomNumber(10, 50);

  if (Math.random() < 0.5) {
    shapes.push(new Rectangle(x, y, randomColor, randomWidth, randomHeight));
  } else {
    shapes.push(new Circle(x, y, randomColor, randomRadius));
  }

  drawShapes();
});
