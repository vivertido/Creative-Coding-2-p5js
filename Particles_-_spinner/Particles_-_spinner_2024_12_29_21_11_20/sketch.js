/* 
Particles spinner example:
using vector from angle. 

*/

let particles = []
const max_particles = 1
let dir = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(60) //adjust to see animation in slow motion
   
}

function draw() {
  background(10);
  
    
    
    for (let i = 0 ; i < max_particles ; i++){
    
      let p = new Particle(width/2, height/2, dir) //new direction each cycle
      particles.push(p)
    
     }
  
    
  
  for (let p of particles){
    
    p.display()
    p.move()  
   // p.bounce()
    
   
    
    if (p.die()){
       //removes each particle if it happens to be dead
       let i = particles.indexOf(p) //get the index of the dead particle
       particles.splice(i, 1) //splice it away.
      
    }
  }
  
  dir +=0.1
  
}


class Particle{
  
  constructor (x,y, angle){
    this.r = random(12,20)
    this.pos = createVector(x,y)
    
    this.vel = p5.Vector.fromAngle(angle)
    this.vel.mult(10); 

    this.lifetime = 255
  }
  
  display(){
    
    stroke(120,225, 125, this.lifetime) 
    fill(120,225, 125, this.lifetime) 
    ellipse(this.pos.x, this.pos.y, this.r)
  }
  
  move(){
    
    this.vel.add(this.accel)
    this.pos.add(this.vel);
     
    this.lifetime -= 4 //disappear faster by subtracting more each cycle
  }
  
  // applyForce(force) {
  //   this.accel.add(force);
  // }
  
  
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