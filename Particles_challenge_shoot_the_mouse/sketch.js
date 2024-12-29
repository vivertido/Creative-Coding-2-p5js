/* 
  Challenge: Make this ship shoot where the mouse is clicked.
    
*/

let particles = []
const max_particles = 1


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(60) //adjust to see animation in slow motion
   
}

function draw() {
  background(10);
  
  if (mouseIsPressed){
    
    for (let i = 0 ; i < max_particles ; i++){
    
      let p = new Particle(width/2, height/2)
      particles.push(p)
    
     }
  
  }
  
  for (let p of particles){
    
    p.display()
    p.move()  
   // p.bounce()
    
    let shot = createVector(0.4, 0.10)
    p.applyForce(shot)
    
    if (p.die()){
       //removes each particle if it happens to be dead
       let i = particles.indexOf(p) //get the index of the dead particle
       particles.splice(i, 1) //splice it away.
      
    }
  }
  
  
  
}




class Particle{
  
  constructor (x,y){
    this.r = random(12,20)
    this.pos = createVector(x,y)
    
    this.vel = createVector(0.01,0)
     
    this.accel = createVector(0.1, 0); // accel is change in velocity
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