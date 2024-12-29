let particles = []
const max_particles = 10


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0 ; i < max_particles ; i++){
    
    let p = new Particle(random(0,width), random(0, height))
    particles.push(p)
  }
   
}

function draw() {
  background(10);
  
  for (let i = 0; i < particles.length ; i ++){
    
    p = particles[i]
    p.display()
    p.move()  
    p.bounce()
    
    let gravity = createVector(0, 0.4)
    p.applyForce(gravity)
    
  }
}
class Particle{
  
  constructor (x,y){
  this.r = random(40,55)
  this.pos = createVector(x,y)
  this.vel = createVector(0,0)
  this.accel = createVector(0, 0); // accel is change in velocity
  
  }
  
  display(){
    
    stroke(225,125, 255)
    fill(225,125, 255, 120)
    ellipse(this.pos.x, this.pos.y, this.r)
  }
  
  move(vx,vy){
    
    this.vel.add(this.accel)
    this.pos.add(this.vel);
    this.accel.set(0, 0);
  }
  
  applyForce(force) {
    this.accel.add(force);
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