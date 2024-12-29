
class Particle{
  
  constructor (pos, angle){
    this.w = 2 // laser size
    this.h = 60
    this.pos = createVector(pos.x,pos.y)
    this.vel = p5.Vector.fromAngle(angle) //using ship heading vector
    this.vel.mult(40); 

    this.lifetime = 255 //lets the lasers die after a while
  }
  
  display(){
    
    push()
    stroke(0,255, 125, this.lifetime) 
    fill(226, 252, 210, this.lifetime) 
    //ellipse(this.pos.x, this.pos.y, this.r, this.r)
    rectMode(CENTER)
    rect(this.pos.x, this.pos.y - this.h , this.w , this.h)
     
     
    pop()
  }
  
  move(){
    
    this.vel.add(this.accel)
    this.pos.add(this.vel);
     
    this.lifetime -= 4 
  }
  
  hitTarget(target){
    
     var d = dist(this.pos.x, this.pos.y-this.h, target.pos.x+target.size/2, target.pos.y+target.size/2);
     
    //DEBUG
     // push()
     // fill("white")
     // textSize(11)
     // text(nfc(d,0) , target.pos.x, target.pos.y)
     // pop()
    
    //DEBUG
     // stroke("white")
     // line(this.pos.x, this.pos.y-this.h, target.pos.x+target.size/2, target.pos.y+target.size/2)
    
    if (d < target.size) {
      return true;
    } else {
      return false;
    }
    
  }

  
  die(){
    
    return (this.lifetime < 0)
    
  }
  
  bounce(){
    //Bounces off the canvas edges, turn in in sketch.js if needed
    
    if (this.pos.y >= height-this.r) {
      this.pos.y = height-this.r;
      this.vel.y *= -1;
    } else if (this.pos.y <= this.r){
      //this.pos.y = height-this.r; //the reappear at the bottom
       this.pos.y = this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width-this.r) {
      this.pos.x = width-this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
    
  }
  
}