/* 
  
  Alien Shooter

*/

let particles = []
const max_particles = 1
let ship;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(60) //adjust to see animation in slow motion
  
  ship = new Ship();
}

function draw() {
  background(10);
  
 
  
  if (mouseIsPressed){
      for (let i = 0 ; i < max_particles ; i++){
    
      let p = new Particle(ship.pos, ship.heading) //new direction each cycle
      particles.push(p)
    
     }
    
  }
    
  for (let p of particles){
    
    p.display()
    p.move()  
    p.bounce() //turn off to shoot to stop
    
    if (p.die()){
       //removes each particle if it happens to be dead
       let i = particles.indexOf(p)  
       particles.splice(i, 1)  
      
    }
  }
  
  ship.display()
  ship.turn();
  
}


function keyPressed() {
  if (keyCode== RIGHT_ARROW) {
  	ship.setRotation(0.1);
    print("turn right")
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
    print("turn left")
  }
}

function keyReleased() {
  ship.setRotation(0); // without this, the ship spins without stop
    
}

