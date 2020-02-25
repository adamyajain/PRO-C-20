

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
var r = 7;
var g = 14;
var b = 4;

function setup(){
  createCanvas(400,400);
 
}


function draw(){
 if(frameCount%100===0){
  // change the value of Red based on the mouse movement about the X axis
  r = map(mouseX,random(0,255),random(0,255),0,400);
  // change the value of Green based on the mouse movement about the X axis
  g = map(mouseX,random(0,255),random(0,255),0,400);
  // change the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,random(0,255),random(0,255),0,400);
 }
  // Use the map() function to do so. 
  // Pass the values to the background() function you have learnt previously.
  background(r,g,b,10,20,40);
  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(mouseX,200,25,25);
}