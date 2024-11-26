let font;
let renderer;
function preload() {
    font = loadFont("fonts/Arial.ttf");
}

//UI ELEMENTS

let uiPositionX= 10;
let uiSpacing = 50;

let letters = "yes!";
let rectSize = 200;

let inputFiledY;
let sliderStrokeWeightY;
let sliderFontSizeY;
let sliderSamplingY;
let sliderRectSizeY;

var originP = { x: 0, y: 0 };
let mySpeed = 0.07;



function setup() {
  renderer = createCanvas(windowWidth, windowHeight);
  frameRate(30)

  sliderSamplingY = windowHeight - uiSpacing*2;
  sliderRectSizeY = windowHeight - uiSpacing*3;
  sliderFontSizeY = windowHeight - uiSpacing*4;
  sliderStrokeWeightY = windowHeight - uiSpacing*5;
  let radioColorY = windowHeight - uiSpacing*6;
  let radioShapeY = windowHeight - uiSpacing*7;
  inputFiledY = windowHeight - uiSpacing*8;
  
  let inp = createInput('yes!');
  inp.position(uiPositionX, inputFiledY);
  inp.size(100);
  inp.input(myInputEvent);
  inp.style("fontSize", "30px");
  inp.style("width", "100px");
  inp.style("height", "40px");
  inp.style("color", "#a7b1ad");

  //RADIO BUTTON

  radioShape = createRadio();
  radioShape.option('4', ' Rectangles');
  radioShape.option('5', ' Circles');
  radioShape.style('10px', '10px');
  radioShape.style('font-family', 'Arial');
  radioShape.style('color', '#a7b1ad');
  radioShape.style('font-size', '12px');
  radioShape.position(uiPositionX, radioShapeY+15);

  radioColor = createRadio();
  radioColor.option("1", " day");
  radioColor.option("2", " night");
  radioColor.selected('2');
  radioColor.style('font-family', 'Arial');
  radioColor.style('color', '#a7b1ad');
  radioColor.style('border-radius:', '20%');
  radioColor.style('font-size', '12px');
  radioColor.position(uiPositionX, radioColorY);

  //SLIDER

  sliderFontSize = createSlider(200, 700, 450, 5);
  sliderFontSize.position(uiPositionX, sliderFontSizeY);
  sliderFontSize.style('width', '80px');

  sliderRectSize = createSlider(50, 200, 50, 5);
  sliderRectSize.position(uiPositionX, sliderRectSizeY);
  sliderRectSize.style('width', '80px');

  sliderStrokeWeight = createSlider(1, 5, 1, 0.5);
  sliderStrokeWeight.position(uiPositionX, sliderStrokeWeightY);
  sliderStrokeWeight.style('width', '80px');
  
  sliderSampling = createSlider(0.05, 0.3, 0.05, 0.05);
  sliderSampling.position(uiPositionX, sliderSamplingY);
  sliderSampling.style('width', '80px'); 

  //DOWNLOAD BUTTON
  downloadButton = createButton('Download');
  downloadButton.position(10, sliderSamplingY+35);
  downloadButton.mousePressed(() => {
    save('output.png');
  });
}

function draw() {

  clear();
  //renderer.drawingContext.__clearCanvas();

  let myRectSize= sliderRectSize.value();
  var p1 = { x:  -myRectSize, y:  -myRectSize };
  var p2 = { x: myRectSize, y: -myRectSize }; 
  var p3 = { x:  myRectSize, y:  myRectSize }; 
  var p4 = { x: -myRectSize, y: myRectSize }; 

  let colorPalette = radioColor.value();
  if (colorPalette == 1) {
    bgColor = "#ffffff";
    strokeColor = "#000000";
  } else if (colorPalette == 2) {
    bgColor = "#000000";
    strokeColor = "#ffffff";
  } 
  
  background(bgColor);

  stroke("#a7b1ad");
  strokeWeight(3);
  line(uiPositionX,inputFiledY + 45 ,100,inputFiledY + 45);
  noStroke()

  fill("#a7b1ad")
  text("Input", uiPositionX, inputFiledY);
  text("Font Size", uiPositionX, sliderFontSizeY  );
  text("Frame Size", uiPositionX, sliderRectSizeY);
  text("Stroke Weight", uiPositionX, sliderStrokeWeightY);
  text("Sample Factor", uiPositionX, sliderSamplingY);
  
  fill(bgColor);
  stroke(strokeColor) 
  
  let myFontSize = sliderFontSize.value();
  let mySampleFactor = sliderSampling.value();
  let shape = radioShape.value();

  let myStrokeWeight = sliderStrokeWeight.value();
  strokeWeight(myStrokeWeight);
  
  
  translate(-50, height/1.8);
  
  for (let k = 0; k < letters.length; k = k + 1) { 
    
  translate(400, 0);

  myLetter = letters[k];
  let points = font.textToPoints(myLetter, 0, 0, myFontSize, {sampleFactor: mySampleFactor});
  let bounds = font.textBounds(myLetter, 0, 0, myFontSize);
  
  ellipseSize = map(sin(mySpeed*frameCount), -1, 1,120, 8);
  
    for (let i = 0; i < points.length; i = i + 1) { 
      
      //calculate letter points to center the letter
      let letterX = points[i].x - bounds.x - bounds.w/2;
      let letterY = points[i].y - bounds.y - bounds.h/2;
      letterP = {x: letterX, y: letterY};
      
      //calculate intersection with rectangle outline
      var intersectedP1 = calculateIntersection(p1, p2, originP, letterP);
      var dist1 = createVector(intersectedP1.x - letterX, intersectedP1.y - letterY);

      var intersectedP2 = calculateIntersection(p2, p3, originP, letterP);
      var dist2 = createVector(intersectedP2.x - letterX, intersectedP2.y - letterY);
      
      var intersectedP3 = calculateIntersection(p3, p4, originP, letterP);
      var dist3 = createVector(intersectedP3.x - letterX, intersectedP3.y - letterY);
      
      var intersectedP4 = calculateIntersection(p4, p1, originP, letterP);
      var dist4 = createVector(intersectedP4.x - letterX, intersectedP4.y - letterY);
      
      //Interpolation
      const shortestVector = getSmallestVector(dist1, dist2, dist3, dist4)
      
      for (let j = 0; j < 10; j = j+1) { 
        interpolX = letterX + (shortestVector.x/10*j);
        interpolY = letterY + (shortestVector.y/10*j);

        if (shape == 4) {
            rectMode(CENTER)
            rect(interpolX, interpolY, ellipseSize, ellipseSize/3)
        } else {
          ellipse(interpolX, interpolY, ellipseSize);
        }
      }
  }
  //save ("alphabet_v1_" + frameCount + ".png")

  }
}

function getSmallestVector(vector1, vector2, vector3, vector4) {
  const vectors = [vector1, vector2, vector3, vector4];
  const smallestVector = vectors.reduce((prev, current) => (prev.mag() < current.mag() ? prev : current));
  return smallestVector;
}

function calculateIntersection(p1, p2, p3, p4) {

    var c2x = p3.x - p4.x; // (x3 - x4)
  	var c3x = p1.x - p2.x; // (x1 - x2)
  	var c2y = p3.y - p4.y; // (y3 - y4)
  	var c3y = p1.y - p2.y; // (y1 - y2)
  
  	// down part of intersection point formula
  	var d  = c3x * c2y - c3y * c2x;
  
  	if (d == 0) {
    	throw new Error('Number of intersection points is zero or infinity.');
    }
  
  	// upper part of intersection point formula
  	var u1 = p1.x * p2.y - p1.y * p2.x; // (x1 * y2 - y1 * x2)
  	var u4 = p3.x * p4.y - p3.y * p4.x; // (x3 * y4 - y3 * x4)
  
  	// intersection point formula
  	
  	var px = (u1 * c2x - c3x * u4) / d;
  	var py = (u1 * c2y - c3y * u4) / d;
  	
  	var p = { x: px, y: py };
  
  	return p;
}

function myInputEvent() {
  letters = this.value();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }







