let colorPallet1 = [ 'rgb(255, 25, 51)', //rot
               'rgb(63, 246, 34)', 
               'rgb(108, 255, 255)', 
               'rgb(253, 253,40)',

            ];

let colorPallet2 = [ //'rgb(108, 255, 255)', //gelb
               'rgb(63, 246, 34)', //grün
               'rgb(9, 0, 243)', //dunkel blau
               'rgb(233, 51, 246)', //pink
               'rgb(255, 149, 0)',//orange
               "rgb(255, 25, 51)", //red
            ];

let colorPallet = colorPallet2;
let randomizerButton;
let sizeSlider;
let whichColor = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(250);
    frameRate(10);
    textSize(100);
    textAlign(CENTER);

    randomizerButton = createButton("RandomColor");
    randomizerButton.mousePressed(changeMyColor);
    sizeSlider = createSlider(10, 1000, 20, 10);
  }

  function draw() {

    frameRate(100);
    fill(colorPallet[whichColor]);

    noStroke();
    
    let mySize = sizeSlider.value();
    let mySize2 = mouseX*mouseY/10000;
    

    circle(windowWidth*0.5, windowHeight*0.3, mySize);
    circle(windowWidth*0.5, windowHeight*0.5, mySize);
    circle(windowWidth*0.5, windowHeight*0.7, mySize); 
    circle(windowWidth*0.3, windowHeight*0.8, mySize); 
    
    circle(windowWidth*0.7, windowHeight*0.8, mySize);
    circle(windowWidth*0.6, windowHeight*0.6, mySize);
    circle(windowWidth*0.6, windowHeight*0.7, mySize);
    circle(windowWidth*0.8, windowHeight*0.7, mySize);
    
    circle(windowWidth*0.3, mouseY, mySize2);
    circle(windowWidth*0.6, mouseY, mySize2);
    circle(windowWidth*0.7, mouseY, mySize2);
    circle(windowWidth*0.8, mouseY, mySize2);
    
    filter(BLUR, 5);
    //drawingContext.filter = "blur(10px)";
    filter(POSTERIZE, 3);

    save( "lava_v4_" + frameCount + ".jpg");
  }

  function changeMyColor() {
    console.log("color changed");
    whichColor = int(random(0, colorPallet.length));

  }