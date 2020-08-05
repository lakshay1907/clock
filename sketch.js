//Variable for hour hand
var hr;
//Variable for minute hand
var mn;
//Variable for second hand
var sc;
function setup() {
  //Setting size of the canvas
  createCanvas(800,400);
  // Calculating time using predefined funcitons in p5.js
  
  
}
  function draw() {
    //Changing background color to black 
  background(0);
  //Changing angle mode to degrees from radians
  hr= hour();
  mn= minute();
  sc = second();
  angleMode(DEGREES);
  
  
  translate(400,200);
  rotate(-90);
  //Using map function to draw the arms of clock 
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  //drawing seconds hand
  push();
  // rotate the hand based on angle calculated
  rotate(scAngle);
  // Constructing arms for the clock by line function
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,150,0); 
  pop();
  //drawing minutes hand
  push();
  // rotate the hand based on angle calculated
  rotate(mnAngle);
  // Constructing arms for the clock by line function
  stroke(0,128,0);
  strokeWeight(7);
  line(0,0,120,0);
  pop();
  //drawing hours hand
  push();
  // rotate the hand based on angle calculated
  rotate(hrAngle);
  // Constructing arms for the clock by line function
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}