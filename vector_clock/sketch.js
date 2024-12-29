var r;//radius
var angle 
var step  //distance between steps in radians
let secs = -1
var v1
let redColor = 0
let greenColor =255
let blueColor = 0

function setup() {
  createCanvas(400, 400);
  
  //initialize variables
  r = 100;
  angle = 15.75; //value found by trial and error
  step  = TWO_PI/60 ; //in radians equivalent of 360/6 in degrees
  
  v1 = createVector(width / 2, height / 2)
    
  background(60);
  
  frameRate(60) // set to 60 for 600 1/6
  
}

function draw() {
  
  //move 0,0 to the center of the screen
  
  secs++
  if (secs == 60){
    redColor += random(40,100)
    greenColor -= random(40,100)
    blueColor += random(40,100)
    
    secs= 0
  }
  
  if (redColor > 225){
    
    redColor =0
  }
  if (greenColor <=  0){
    
    greenColor =255
  }
  
  if (blueColor > 255){
    
    blueColor = 0
  }
  //convert polar coordinates to cartesian coordinates
  var x = r * sin(angle)+width/2 ;
  var y = r * cos(angle)+height/2;
  
  console.log(blueColor)
  //draw ellipse at every x,y point
  ellipse(x, y, 3);
  
  ellipseMode(CENTER)
  fill(0)
  //ellipse(width/2, height/2, width/2)
 
  strokeWeight(2)
  
  stroke(redColor, greenColor, blueColor)
  
  line(v1.x,v1.y, x, y)
  
  //increase angle by step size
  angle = angle - step ;
  
  //fill(60)
   
  ellipse(v1.x, v1.y, 90)
  
  textSize(34)
  textAlign(CENTER);
  fill("white")
  text(secs, width/2, height/2 +10)

   
}