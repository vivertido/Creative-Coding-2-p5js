/* Gaussian random example with standard deviation

inspried from Nature of code: natureofcode.com
This sketch is to help understand the nature of randomness and standard deviation. In nature, most values tend to stick closer to the mean, but there are outliers. Think of the height of people. They aren't truly random. Most people are within a "normal" range, and then a few others are either really tall or really short. Standard deviation is used to set how far from the mean a value is.

🧐 What do you think this sketch does? Discuss.
   
   Run and see what happens!
   
   Things to investigate:
    1. What happens if you adjust the standard deviation?
    2. What if you change the xmean?
    3. Adjust the color and trasparency of the ellipse
    
    Make some adjustments:
    1. Add a yloc just like the xloc
    2. Deine a ymean
    3. update the yloc to scale with the ymean and sd
    4  add another standard deviation or the y location.
    5. redraw the ellipse with new yloc
    6. change colors as needed

*/

function setup() {
  createCanvas(640, 360);
  background(220);
}

function draw() {
  // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
  let xloc = randomGaussian();
   

  const sd = 50; // Adjust a standard deviation
  const xmean = width / 4; // Define a mean value (middle of the screen along the x-axis)
  
  
  xloc = xloc * sd + xmean; // Scale the gaussian random number by standard deviation and mean
  
   

  
  fill(0, 10); //change color and transparency
  noStroke();
  ellipse(xloc, height/2, 16, 16); // Draw an ellipse at our "normal" random position
}