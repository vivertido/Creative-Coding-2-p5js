class Ship{
  
  constructor(){
    this.r = 12
    this.pos = createVector(width/2, height-this.r-10);
    this.heading = 4.7; //shoots stright up every time
    this.rotation = 0;
    
    
  }
  
  display(){
    
    push();
    translate(this.pos.x, this.pos.y);
    fill(255, 41, 112);
    noStroke();
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    pop();
    
  }
  
  wrap(){
    
     if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }
  
  
  
  move(step){
    print(this.pos.x)
    this.pos.x += step
  }
  
}