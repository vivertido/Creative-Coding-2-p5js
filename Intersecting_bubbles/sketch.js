/*

Intersecting two bubbles with new intersect class method
When bubbles overalp, their color should change
- Use constants to set bubble appearance and behavior
- Change how bubbles react when overlapping
- Challenge: Make a new sketch that involves x number of bubbles checking for intersection


*/


//two bubbles only
let bubble1
let bubble2
 
//constants used to change values once, instead of all over the place
const MAX_RADIUS = 100
const MIN_RADIUS= 60
const MOVE_MIN = - 8
const MOVE_MAX = 8

function setup() {
  createCanvas(600, 600);
  
  bubble1 = new Bubble(random(120,width-100), random(120,width-100), random(MIN_RADIUS,MAX_RADIUS))
  
  bubble2 = new Bubble(random(120,width-100), random(120,width-100), random(MIN_RADIUS,MAX_RADIUS))
  
}

function draw() {
  background(15);
 
  
  bubble1.display()
  bubble2.display()
  bubble1.move(MOVE_MIN, MOVE_MAX)
  bubble2.move(MOVE_MIN, MOVE_MAX)
  
  bubble1.intersects(bubble2)
  
}

class Bubble {
  /* simple bubble class */
  
  constructor(x, y, rad){
    
    this.x = x
    this.y = y
    this.rad = rad
    this.color = [0,200,200,120] //set color property as array of RGB values
    
  }
  
  display(color){
    
    fill(this.color)
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.rad*2)
    
  }
  
  move(moveMin, moveMax){
    
    this.x = this.x + random(moveMin, moveMax)
    this.y = this.y + random(moveMin, moveMax)
  }
  
  intersects(other){
  let  distance = dist(this.x, this.y, other.x, other.y)
   if (distance < this.rad + other.rad){
    
      this.color = [0,200,200,200]
      other.color = [0,200,200,200]
  } else{
    
    this.color = [0,200,200,120]
    other.color = [0,200,200,120]
  }
  }
  
}