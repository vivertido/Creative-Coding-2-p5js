/*
Demo of Random vs. Noise

What is the difference between the two ellipses?
Read about the noise() function and compare what it does vs. the random() function.

Fiddle with this code, do some reading and report back!

*/

function setup() {
  createCanvas(600, 400);
}

//need a value to allow for smooth noise movement
let xOffset = 0

function draw() {
  background(220);
  noStroke()
  

  //example with random
  let randX = random(width)
  fill(220, 200,0)
  ellipse(randX, 200, 30)
  
  
  //example with Perlin noise
  
  // usage: map(value, start1, stop1, start2, stop2, [withinBounds])
  let noiseX = map(noise(xOffset), 0, 1, 0, width )
  fill(225,0, 125)
  ellipse(noiseX, 300, 30)
  
  
  //what is offset this doing? what if it's not there? What if you change it?
  xOffset += 0.02 
  
}