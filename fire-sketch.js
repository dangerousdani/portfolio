var xoff=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
}

function draw() {
  
  let rows = 40;
  let cols = 6;
  
  let rectheight = windowHeight/rows;
  let rectwidth = windowWidth/cols;
  
  let myRed = color("#e28551");
  let myYellow = color("#bfb741");
  let myGrey = color("#bfc3b9");  
  let myDarkGrey = color("#B1C0B0");
  
  let breakPoint = map(mouseY, 0, height, 0, rows);
  
 
  for (let j = 0; j < cols; j++) { 
   for (let i = 0; i < rows; i++) {
     
      let firstPoint = map(noise(xoff*i*(j+1)), 0, 1, 1,breakPoint);
      let secPoint = map(noise(xoff*i*(j+1)), 0, 1, breakPoint,rows);
     
      if(i < firstPoint){

        let yMap = map(i,0, firstPoint, 0, 1);
        let newColor = lerpColor(myDarkGrey, myGrey, yMap);
        fill(newColor);
      } 


      if (i > firstPoint && i < secPoint){

        let yMap = map(i,firstPoint, secPoint, 0, 1);
        let newColor = lerpColor(myGrey, myYellow, yMap);
        fill(newColor);
      } 


      if (i > secPoint){

        let yMap = map(i,secPoint, rows, 0, 1);
        let newColor = lerpColor(myYellow, myRed, yMap);
        fill(newColor);
      } 
      
      
      rect(j*rectwidth, i * rectheight, rectwidth, rectheight);
      xoff += 0.000001;
    }
 }
  
 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
