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
    p.move(random(-0.0021, -0.0021), random(-0.0021, 0.0021)) //👈🏽 adjust these values..
    p.bounce()
    
  }
  
}


class Particle{
  //try changing the p5.Vector.random2D() for all vectors
  
   constructor (x,y){
    this.pos = createVector(x,y)
    this.r = random(10,15)
    //this.vel = createVector(0,0) //change this for the one below
    this.vel = p5.Vector.random2D() 
    this.vel.mult(random(1,5));   //adjust velocity
    this.accel = createVector(0, 0); // accel is change in velocity
    
  }
  
  display(){
    
    stroke(125,125, 255)
    fill(125,125, 255, 120)
    ellipse(this.pos.x, this.pos.y, this.r)
  }
  
  move(vx,vy){
    this.accel.add(vx,vy)
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