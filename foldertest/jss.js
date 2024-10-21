const container = document.getElementById("container");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const circles = [];
const radius = 32; // Increased radius
let mouseX, mouseY;

canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

class Circle {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "#f00";
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + radius >= canvas.width || this.x - radius <= 0) {
      this.dx = -this.dx;
    }

    if (this.y + radius >= canvas.height || this.y - radius <= 0) {
      this.dy = -this.dy;
    }

    this.draw();
  }
}

function createCircle(x, y, dx, dy) {
  const circle = new Circle(x, y, dx, dy);
  circle.draw();
  circles.push(circle);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moveCircles() {
  clearCanvas();

  for (let i = 0; i < circles.length; i++) {
    const circle1 = circles[i];
    circle1.update();

    for (let j = i + 1; j < circles.length; j++) {
      const circle2 = circles[j];
      const distance = Math.sqrt(Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2));

      if (distance <= radius * 2) {
        ctx.beginPath();
        ctx.moveTo(circle1.x, circle1.y);
        ctx.lineTo(circle2.x, circle2.y);
        ctx.strokeStyle = "#000";
        ctx.stroke();
        ctx.closePath();
      }
    }

    const distanceToMouse = Math.sqrt(Math.pow(circle1.x - mouseX, 2) + Math.pow(circle1.y - mouseY, 2));
    if (distanceToMouse <= radius * 2) {
      ctx.beginPath();
      ctx.moveTo(circle1.x, circle1.y);
      ctx.lineTo(mouseX, mouseY);
      ctx.strokeStyle = "#000";
      ctx.stroke();
      ctx.closePath();
    }
  }

  requestAnimationFrame(moveCircles);
}

function randomDirection() {
  return Math.random() > 0.5 ? 1 : -1;
}

function animateCircles() {
  const numCircles = 10; // Increase the number of circles

  for (let i = 0; i < numCircles; i++) {
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    const dx = randomDirection() * (Math.random() * 2 + 1); // Random speed in x direction
    const dy = randomDirection() * (Math.random() * 2 + 1); // Random speed in y direction
    createCircle(x, y, dx, dy);
  }

  moveCircles();
}

animateCircles();
