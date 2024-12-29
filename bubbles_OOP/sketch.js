let bubbles = []

//constants
const MAX_RADIUS = 30;
const MIN_RADIUS= 15;
const NUM_BUBBLES = 15;
const MOVE_MIN = - 20;
const MOVE_MAX = 20;


function setup() {
  createCanvas(600, 600);
  
  for (let i = 0 ; i < NUM_BUBBLES ; i ++){
    
    let bubble = new Bubble(random(0, width), random(0,height), random(MIN_RADIUS, MAX_RADIUS))
    bubbles.push(bubble)
  }
  
}

function draw() {
  background(15);
  
  for (let i = 0 ; i < bubbles.length; i ++){
    
    bubbles[i].display()
    bubbles[i].move(MOVE_MIN, MOVE_MAX)
  }
}


class Bubble {
  
  constructor(x, y, rad){
    
    this.x = x
    this.y = y
    this.rad = rad
    
  }
  
  display(){
    
    fill(225, 200)
    ellipse(this.x, this.y, this.rad)
    
  }
  
  move(moveMin, moveMax){
    
    this.x = this.x + random(moveMin, moveMax)
    this.y = this.y + random(moveMin, moveMax)
  }
  
}