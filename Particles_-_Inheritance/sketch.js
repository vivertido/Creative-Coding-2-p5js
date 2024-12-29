/* 
  Particle
  class is now a parent class
    
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
    
      let p = new Particle(mouseX, mouseY)
      particles.push(p)
    
     }
  
  }
  
  for (let p of particles){
    
    p.display()
    p.move()  
    p.bounce()
    
    let gravity = createVector(0, 0.2)
    p.applyForce(gravity)
    
    if (p.die()){
       //removes each particle if it happens to be dead
       let i = particles.indexOf(p)  
       particles.splice(i, 1) 
      
    }
  }
  
  
}

class Confetti extends Particle{
  
  
}
