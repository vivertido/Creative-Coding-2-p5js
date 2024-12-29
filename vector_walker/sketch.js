let pos

function setup() {
  createCanvas(400, 400)
  
  pos = createVector(width/2, height/2)
   background("#000")
}

function draw() {
 
  stroke(220, 0, 125, 255)
  strokeWeight(3)
  point(pos.x, pos.y)
  
  
  pos.x += random(-4,4)
  pos.y += random(-4,4)
  
}