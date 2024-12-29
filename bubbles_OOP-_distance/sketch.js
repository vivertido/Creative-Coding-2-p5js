//two bubbles only
let bubble1
let bubble2
let distance // will use to store distance between origins.

//constants used to change values once, instead of all over the place
const MAX_RADIUS = 150
const MIN_RADIUS= 15
const NUM_BUBBLES = 15
const MOVE_MIN = - 2
const MOVE_MAX = 2

function setup() {
  createCanvas(600, 600);
  
  bubble1 = new Bubble(random(120,width-100), random(120,width-100), random(MIN_RADIUS,MAX_RADIUS))
  
  bubble2 = new Bubble(random(120,width-100), random(120,width-100), random(MIN_RADIUS,MAX_RADIUS))
  
}

function draw() {
  background(15);
  
  bubble1.display()
  bubble2.display()
  bubble1.move(random(MOVE_MIN, MOVE_MAX))
  bubble2.move(random(MOVE_MIN, MOVE_MAX))
  
    //calculate the distance between origins
  distance = dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y)
  stroke("white")
  line(bubble1.x, bubble1.y, bubble2.x, bubble2.y)
  
  textSize(18);
  fill("white")
  text("dist: " + distance, 12,20);

 
}

class Bubble {
  /* simple bubble class */
  
  constructor(x, y, rad){
    
    this.x = x
    this.y = y
    this.rad = rad
    
  }
  
  display(){
    
    fill(20,225,125, 200)
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.rad)

    
  }
  
  move(){
    
    this.x = this.x + random(-3, 3)
    this.y = this.y + random(-3, 3)
  }
  
}