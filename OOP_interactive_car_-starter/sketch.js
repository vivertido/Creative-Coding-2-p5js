/* 
 Car Instances: Make cars clickable and deletable
 Sketch should:
 - draw and animate car instances at varying speeds
 - detect if clicked with mouse event
 - delete if clicked
 - generate new car when clicking on canvas, if not currently deleting
 
*/

let cars=[] //empty array to fill with cars

//change car colors if you want
let carColors = ["firebrick", "gray", "skyblue", "lime", "navy", "orange"]; 

 // boolean to allow us to toggle between creating and deleting cars with same mousePressed event
let wasDeleted = false;  // You will need to set and reset this

function setup() {
  createCanvas(600, 400);

}

function draw() {
  background("#a0f1f0");
  
  //continously draw cars in array
  for (let i = 0 ; i < cars.length ; i++ ){
    cars[i].display()
    cars[i].move()
  }
  
 
}

function makeCar(x,y){
  
  let car = new Car(random(carColors),x,y,  40, 20)
  cars.push(car) //add it to the array
  car.start(random(-10,10)) //set speed (neg. for left direction speed)
 
}

function mousePressed(){
  
   if (cars.length>0){
       //for loop through all the cars to check if clicked
       for (let i = 0; i< cars.length ; i ++){
         
         //TODO: check if the car at index i was clicked
         
         
            //if so, splice out the car from the array
         
         
            // Update the boolean to true
           
       }
   } 
  
   //TODO: only call makeCar() if not deleting a car
  
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
  
  clicked(touchX, touchY){
    
    //  Print out what touchX and touchY are
    
    
    // 👇🏾 Complex if statements can be written like this for readability
    if (touchX > this.x && 
        touchX < this.x + this.w &&
        touchY > this.y &&
        touchY < this.y + this.h){
  
          // Method just has to respond that car was touched.
          // It doesn't have to be aware of what happens to it
      
           return true

    }  //end if
    
  } //end of clicked method
  
} //end class Car

