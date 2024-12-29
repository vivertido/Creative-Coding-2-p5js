let particles = []
const max_particles = 80


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
    p.move(random(0.10, -0.021), random(0, 0.012)) //👈🏽 adjust these values..
    p.bounce()
  }
  
}


class Particle{
  
   constructor (x,y){
    this.pos = createVector(x,y)
    this.r = random(10,15)
    
    this.vel = createVector(0, 0); // velocity is rate from point a to b
    this.acc = createVector(0, 0); // accel is change in velocity
    
  }
  
  display(){
    
    stroke(125,125, 255)
    fill(125,125, 255, 120)
    ellipse(this.pos.x, this.pos.y, this.r)
  }
  
  move(vx,vy){
    this.vel.add(vx,vy)
    this.pos.add(this.vel);
  }
  
  bounce(){
    //Bounce off the canvas edges
    
    if (this.pos.y >= height-this.r) {
      this.pos.y = height-this.r;
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