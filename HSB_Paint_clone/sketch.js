/* 

Demo of completed mouseDragged Paint
- Uses HSB color mode to simplify color selection
- Read about HSB color mode here:

 
*/

let colorSlider
let pickedColor
let brushSlider
let clearButton
let saveButton
let canvas

function setup() {
  canvas = createCanvas(650, 600);
  background(0);
  noStroke()
  
  colorMode(HSB)
  colorSlider = createSlider(0,360, 100)
  colorSlider.position(90,6)
  colorSlider.style('width', '80px');

  
  brushSlider = createSlider(1, 30, 8)
  brushSlider.position(260, 6)
  brushSlider.style('width', '80px');
  
  clearButton = createButton('clear');
  clearButton.position(width-50, 6);
  clearButton.mousePressed(clearDrawing);
  
  saveButton = createButton('save');
  saveButton.position(width-150, 6);
  saveButton.mousePressed(saveDrawing);
    
}

function draw() {
  
  pickedColor = colorSlider.value()
  
 
  stroke("red")
  
  if(mouseIsPressed){
    stroke(pickedColor, 100, 100, 1)
    strokeWeight(brushSlider.value())
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
  
  //controls
  noStroke()
  fill("white")
  rect(0,0, width, 40)
  textSize(20)
  
  fill("black")
  
  text("color" , 10, 20)
  text("size" , 200, 20)
  
  
  fill(pickedColor, 100, 100, 1)
  
  ellipse(400, 16, brushSlider.value())
  
  
}

function saveDrawing(){
  
  saveCanvas(canvas, 'myDrawing', 'jpg');
}

function clearDrawing(){
  
  clear()
  background("black")
}
 