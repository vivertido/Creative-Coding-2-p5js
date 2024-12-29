const planets = [];

function setup() {
  createCanvas(400, 400);

  planets.push(new Planet(width * 0.75, height * 0.5));
}

function mousePressed() {
  planets.push(new Planet(mouseX, mouseY));
}

function draw() {
  background(32);

  // sun
  fill(255, 255, 0);
  circle(width / 2, height / 2, 50);

  for (const planet of planets) {
    planet.draw();
  }
}

class Planet {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // random size
    this.size = random(10, 50);

    // random speed
    this.deltaX = random(-10, 10);
    this.deltaY = random(-10, 10);

    // random color
    this.c = color(random(128, 255), random(128, 255), random(128, 255));
  }

  draw() {
    const sunX = width / 2;
    const sunY = height / 2;
    const distanceFromSun = dist(this.x, this.y, sunX, sunY);

    // planets accelerate faster when they're closer to the sun
    // this simulates gravity pulling them in faster and faster
    this.deltaX += (sunX - this.x) / distanceFromSun;
    this.deltaY += (sunY - this.y) / distanceFromSun;

    this.x += this.deltaX;
    this.y += this.deltaY;

    fill(this.c);
    ellipse(this.x, this.y, this.size);
  }
  
}