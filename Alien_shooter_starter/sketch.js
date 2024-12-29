/* 
Alien shooter starter:

Use this sketch to start an alien shooter game. Some ideas:
- Add an enemy class 
- Detect collisions between enemies and laser particles
- Add game score, lives, etc.
- Add obstacles or enemy particles (can inherit from main Particle class)
- Add subclasses of Particle class to have different projectile types

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
  
  if (keyCode== RIGHT_ARROW) {
  	ship.move(10);
    print("go right")
  } else if (keyCode == LEFT_ARROW) {
    ship.move(-10);
    print("go left")
  }
  
//   if (mouseIsPressed){
//       for (let i = 0 ; i < max_particles ; i++){
    
//       let p = new Particle(ship.pos, ship.heading) //new direction each cycle
//       particles.push(p)
    
//      }
    
//   }
    
  for (let p of particles){
    
    p.display()
    p.move()  
    //p.bounce()
    
    if (p.die()){
       //removes each particle if it happens to be dead
       let i = particles.indexOf(p)  
       particles.splice(i, 1)  
      
    }
  }
  
  ship.display()
  
  
}


function keyPressed() {
 
  if(key == " "){

    
     let p = new Particle(ship.pos, ship.heading)  
     particles.push(p)
  }
  
}

function keyReleased() {
  ship.move(0); // without this, the ship moves without stop
    
}

