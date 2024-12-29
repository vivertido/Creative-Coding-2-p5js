/*

Intersecting any number of bubbles: 
- When bubbles overalp, their color should change
- They should change back when not overlapping
- Program has a bug!  Fix it.


*/


//constants used to change values once, instead of all over the place
const MAX_RADIUS = 60
const MIN_RADIUS= 10
const NUM_BUBBLES = 14
const MOVE_MIN = - 8
const MOVE_MAX = 8



let bubbles = []
 

function setup() {
  createCanvas(600, 600);

  
  for (let i = 0 ; i <= NUM_BUBBLES ; i++){
    
    let bubble = new Bubble(random(120,width-100), 
                            random(120,width-100), 
                            random(MIN_RADIUS,MAX_RADIUS))
   
    bubbles.push(bubble)
  }
  
}

function draw() {
  background(15);
 
  //New for of loop
  for(b of bubbles){

    b.display()
    b.move(MOVE_MIN, MOVE_MAX)
    
    let overlapping = false // new boolean to check overlapping bubbles
    
    for(other of bubbles){ //nested for loop
      
      if (b !== other &&  b.intersects(other)){
         overlapping = true
      }
    }
    
    if(overlapping){
      b.changeColor([200,200,0,220])
      other.changeColor([200,200,0,220])
    }else{
      b.changeColor([100,200,0,220])
      other.changeColor([100,200,0,220])
    }
  }
 
}

class Bubble {
  /* simple bubble class */
  
  constructor(x, y, rad){
    
    this.x = x
    this.y = y
    this.rad = rad
    this.color = [220,0,200,120] //set color property as array of RGB values
    
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
   return (distance < this.rad + other.rad) //check if returns true or false
    
  }
  
  changeColor(c){
    
    this.color = c
    
  }
  
}