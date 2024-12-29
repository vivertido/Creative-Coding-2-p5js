class Alien {
  
  constructor(x,y){
    
    this.size = 14
    this.pos = createVector(x, y)
    //this.vel = p5.Vector.random2D()
    this.vel = createVector(0,0)
    this.heading = 0 
    this.color = color(125,22, 200)
  }
  
  display(){
    
    fill(this.color)
    rect(this.pos.x, this.pos.y, this.size)
  }
  
  move(){
    
   this.pos.x += random(-2,2)
    this.pos.y += random(-2,3)
  }
  
  destroy(){
    
    
  }
}