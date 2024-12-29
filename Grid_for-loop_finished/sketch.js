/* 

  Grid for-loop example: 
  - finished with keyPressed change cell size
  - mouseIsPressed hides grid
  - Challenge: Toggle grid on or off
  
*/

//define a cell size
let gridCellSize = 50


function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(220);
  
  
  if(mouseIsPressed == false){
    drawGrid()
  }
  
}
function drawGrid(){
  
  //Vertical Lines
	for (var x = 0; x < width; x += gridCellSize) {
		line(x, 0, x, height);
	}
	
	//Horizontal Lines
	for (var y = 0; y < height; y += gridCellSize) {
		line(0, y, width, y);
	}
}

function keyPressed(){
  
  if (keyCode == 38 && gridCellSize < 100){

    gridCellSize += 10
  }
  
  if (keyCode == 40 && gridCellSize > 10){
     
    gridCellSize -= 10
  }
  
  print(gridCellSize)
  
}