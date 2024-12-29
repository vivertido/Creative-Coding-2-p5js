/* 
Alien shooter! Code Next Demo
*/


let particles = []
const max_particles = 1
let ship
let aliens = []
const max_aliens = 10

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(24) //adjust to see animation in slow motion
  
  ship = new Ship();
  
  //make aliens
  for (let i = 0 ; i < max_aliens; i ++ ){
    
    let alien = new Alien(random(0, width) , 100)
    aliens.push(alien)
  } 
  
  
}

function draw() {
  background(10);
  
  if (keyCode== RIGHT_ARROW) {
  	ship.move(10);
    
  } else if (keyCode == LEFT_ARROW) {
    ship.move(-10);
    
  }
  
    
  laserShoot()
  ship.display()
  
  
  for (let a of aliens){
    
    a.display()
    a.move()
  }
  
  
}


function keyPressed() {
 
  if(key == " "){

     let p = new Particle(ship.pos, ship.heading)  
     particles.push(p)
  }
  
}

function laserShoot(){
  
    for (let p of particles){ 
    p.display()
    p.move()  
    //p.bounce()
      
    for (let alien of aliens){
         if(p.hitTarget(alien)){
       
           alien.color = color(255, 255, 255)
              
         } else {
      
            
         }
    }
    
    
    if (p.die()){
       //removes each particle if it happens to be dead
       let i = particles.indexOf(p)  
       particles.splice(i, 1)  
    }
  }
}

function keyReleased() {
  ship.move(0); // without this, the ship moves without stop
    
}

