/* Basic Vector 

  What do you think this sketch will do?
  Discss and run it. 
  
  What does the createVector() function do? What does it take in?
  How is the line being drawn?
  
  How might we change how the line is drawn? 
  
  Try changing the code to try to generate things without the mouse

  Modify this:
  - Make many stars at random locations
  - add more randomness with Perlin noise
  - Connect to sound (mic input)

*/
let v1
let angle = 0
r = 200

function setup() {
  createCanvas(440, 440);
   background(0);
  v1 = createVector(width / 2, height / 2)
  var r = 100;

}

function draw() {
 
  strokeWeight(2)
  stroke("#fff")
  line(v1.x,v1.y, mouseX, mouseY)
  
  //un-comment these lines instead, and see what happens!
  var endX = r * sin(angle)+width/2 ;
  var endY = r * cos(angle)+height/2;
  line(v1.x,v1.y, endX, endY)
  
  angle = angle - random(10,1) ;
}

