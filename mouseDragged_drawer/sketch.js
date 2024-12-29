/* 

Demo of Basic Day 1 Sketch for Creative Coding 2

1. 🧐 Predict what this sketch will do before running. Add comments. 
    - Read the code and identify code you understand 
    - Identify new code and look up what it does.
2. 🏃🏾‍♂️Run it and discuss what happenes. 
3. 🔬Try to investigate how things happen and why
    - How does it use color?
    - How do shapes disappear?
    - How do we define each shape and keep track of it's appearance?
    - How would we make fewer or more shapes stay visible? 
4. 🔀 Modify this sketch:
    - How would we use emojis instead of shapes?
    - Change the color and appearance of the shapes
    - a a slider to control the size, color, etc. of the drawing.
    - export the drawing (as an image)
    - How would we replace shapes with lines?

5. 🎨 Take this sketch and makes something new!

*/


let shapes = [];
let shapeType;
let shapeHue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
}

function draw() {
  colorMode(HSB, 100);
  background(0, 0, 100);
  noStroke()
	for (let i = 0; i < shapes.length; i++) {
		let shape = shapes[i];
		fill(shape.color);
        
		let x = shape.x;
		let y = shape.y;
		if (shape.shapeType === 'ellipse') {
			ellipse(x, y, 20, 20);
		} else if (shape.shapeType === 'rect') {
			rect(x, y, 20, 20);
		}
	}
}

function mousePressed() {
	shapeType = random(['ellipse', 'rect']);
	shapeHue = random(100);
}	

function mouseDragged() {
	let shapeColor = color(shapeHue, 50, 100);
	let shape = {shapeType, color: shapeColor, x: mouseX, y: mouseY};
	shapeHue = (shapeHue + 1) % 100;
	shapes.push(shape);
	if (shapes.length > 50) {
		shapes.shift();
	}
  return false;
}