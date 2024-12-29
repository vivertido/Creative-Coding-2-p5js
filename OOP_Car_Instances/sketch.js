/* 
 Code Next Creative Coding 2
 Car class and object demo
 👈🏽 Check out the Todos!

*/

let cars=[] //empty array to fill with cars


function setup() {
  createCanvas(600, 400);

}

function draw() {
  background("#a0f1f0");
  
  //continously draw cars stored in array
  for (let i = 0 ; i < cars.length ; i++ ){
    cars[i].display()
    cars[i].move()
  }
 
}

function makeCar(x,y){
  
  let car = new Car("blue",x,y,  40, 20)
  cars.push(car) //add it to the array
  car.start(random(-10,10)) //set speed (neg. for left direction speed)
  
}

function mousePressed(){
  //p5.js function to capture mousePressed anywhere on canvas
  

    makeCar(mouseX, mouseY)
     
}

class Car {
  /* Constructor expects parameters for
  fill color, x and y coordinates, and a width/height that
  will be used to initialize class properties.
  
  */
  constructor(cColor, x, y, w, h) {
    this.color = cColor;
    this.x = x;
    this.y = y;
    this.w = w; //need width and height for calculating mouse clicks
    this.h = h;
    this.speed = 0;
  }

  start(speed) { // method expects parameter!
    this.speed = speed;
  }

  display() {  
    
    //tires
    fill("black")
    rect(this.x + 6, this.y- 4, 8, 28, 3)
    rect(this.x + 26, this.y- 4, 8, 28, 3)
    
    //body
    fill(this.color);
    rect(this.x, this.y, this.w, this.h, 5);
    
    //windows
    fill("#ffffff") 
    rect(this.x + 5, this.y+3, 6, 14, 2);
    rect(this.x + 25, this.y+3, 8, 14, 2);
    
  }

  move() {  
    this.x += this.speed;
    // Wrap x around boundaries
    if (this.x < -20) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -20;
    }
  }
  
  
  
  
} //end class Car

