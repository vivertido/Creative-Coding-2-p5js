class Particle{
  
  constructor (x,y){
    this.r = random(12,20)
    this.pos = createVector(x,y)
    this.vel = createVector(0,0)
    this.vel = p5.Vector.random2D()
    this.vel.mult(random(2,5)) //makes a firework effect
    this.accel = createVector(0, 0); // accel is change in velocity
    this.lifetime = 255
  }
  
  display(){
    
    stroke(120,225, 125, this.lifetime) //change the last alpha value to lifetime
    fill(120,225, 125, this.lifetime) 
    ellipse(this.pos.x, this.pos.y, this.r)
  }
  
  move(vx,vy){
    
    this.vel.add(this.accel)
    this.pos.add(this.vel);
    this.accel.set(0, 0);
    this.lifetime -= 4 //disappear faster by subtracting more each cycle
  }
  
  applyForce(force) {
    this.accel.add(force);
  }
  
  
  die(){
    
    return (this.lifetime < 0)
    
  }
  
  bounce(){
    //Bounce off the canvas edges
    
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