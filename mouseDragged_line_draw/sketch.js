/* Challenge!

Make this sketch into a more complex painting program that:
 - allows you to change colors somehow (color picker? slider?)
 - allows you to set line width
 - Can save the drawing (saveCanvas() to the rescue!)
 
*/


function setup() {
  createCanvas(600, 600);
  background(220);
  noStroke()
}

function draw() {
 
  stroke("red")
  
  if(mouseIsPressed){
    
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
  
  
}
 