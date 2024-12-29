let particles = []
const max_particles = 100


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
  }
  
}


class Particle{
  
   constructor (x,y){
    this.pos = createVector(x,y)
    this.r = random(10,15)
    
  }
  
  display(){
    
    stroke(125,125, 255)
    fill(125,125, 255, 120)
    ellipse(this.pos.x, this.pos.y, this.r)
  }
  
}