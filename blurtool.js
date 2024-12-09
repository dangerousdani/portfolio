function setup() {
    createCanvas(1000, 400);
    background(220);
  }
  
  function draw() {
    
    let myRed = noise(100)*100;
    //fill(0,0,0);
    //fill(myRed,random(200,255),random(150,255));
    fill(random(0,255),random(0,255),random(0,255));
    noStroke();
    
    let mySize = mouseX*mouseY/5000;
    
    circle(100, 200, mySize);
    circle(100, 250, mySize);
    circle(100, 300, mySize); 
    circle(150, 150, mySize); 
    circle(200, 150, mySize);
    circle(250, 100, mySize);
    circle(300, 150, mySize);
    circle(250, 200, mySize);
    circle(300, 250, mySize);
    circle(250, 300, mySize);
    circle(200, 300, mySize);
    
    circle(100, mouseY, mySize);
    circle(200, mouseY, mySize);
    circle(250, mouseY, mySize);
    circle(300, mouseY, mySize);
    
    filter(BLUR, mouseX*mouseY/50000);
    //filter(POSTERIZE, 3);
  }