class Ship{
  
  constructor(){
    this.pos = createVector(width/2, height/2);
    this.heading = 0;
    this.rotation = 0;
    this.r = 12
    
  }
  
  display(){
    
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    fill(178, 114, 252);
    stroke(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    pop();
    
  }
  
  setRotation(angle){
    
    this.rotation = angle;
  }
  
  turn(){
    this.heading += this.rotation
  }
  
}