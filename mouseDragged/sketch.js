function setup() {
  createCanvas(600, 600);
  background(220);
  noStroke()
}

function draw() {
 
}

function mouseDragged(){
  
  console.log("dragged")
  fill("red")
  ellipse(mouseX, mouseY, 20,20)
  
  
}