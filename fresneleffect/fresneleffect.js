let font;
let myLetterField;
let myColor1Select;
let myColor2Select;
let myRatio;
let renderer;
let sliderX;
let sliderY;
let totalRectsSliderLabel;
let totalRectsSlider;

/*function preload() {
  font = loadFont("./fonts/PPMonumentExtended-Regular.woff2");
}*/

let colorPallet = [ 'rgb(221, 199, 175)',
               'rgb(255, 0, 0)', 
               'rgb(235, 93, 41)', 
               'rgb(255, 237, 0)',
               'rgb(208, 189, 250)',
               'rgb(245, 180, 210)',
            ];

function setup() {
  
  renderer = createCanvas(500, 700, SVG);

  //UI
  
  //Eingabefelder für Breite und Höhe
  widthInput = createInput('500');
  widthInput.size(40);
  widthInput.position(10, 0)
  heightInput = createInput('700');
  heightInput.size(40);
  heightInput.position(60, 0)

  //Resize-Button
  resizeButton = createButton('Resize Canvas');
  resizeButton.position(10, 30);
  resizeButton.mousePressed(() => {
    let newWidth = int(widthInput.value());
    let newHeight = int(heightInput.value());
    resizeCanvas(newWidth, newHeight);
  });
  
  
  myLetterField = createInput('B')
  myLetterField.position(10, 60)
  myLetterField.size(40)
  
  fontSizeSlider = createSlider(300, 1000, 730);
  fontSizeSlider.position(70, 60);
  fontSizeSlider.size(80);
  
  //Color 1
  myColor1Field = createSelect();
  myColor1Field.position(10, 90);
  
  myColor1Field.option("BR Beige", colorPallet[0]);
  myColor1Field.option("BR Rot", colorPallet[1]);
  myColor1Field.option("BR Orange", colorPallet[2]);
  myColor1Field.option("BR Gelb", colorPallet[3]);
  myColor1Field.option("BR Lila", colorPallet[4]);
  myColor1Field.option("BR Rosa", colorPallet[5]);
  
  //Color 2
  myColor2Field = createSelect();
  myColor2Field.position(10, 120);
  
  myColor2Field.option('BR Rot', colorPallet[1]);
  myColor2Field.option('BR Beige', colorPallet[0]);
  myColor2Field.option("BR Orange", colorPallet[2]);
  myColor2Field.option("BR Gelb", colorPallet[3]);
  myColor2Field.option("BR Lila", colorPallet[4]);
  myColor2Field.option("BR Rosa", colorPallet[5]);
  
  
  //Aspect Ratio
  let mySelectLabel = createP("Verhältnis:");
  mySelectLabel.position(10, 140);
  
  mySelect = createSelect();
  mySelect.position(10, 180);
  mySelect.option('30/70', 0);
  mySelect.option('40/60', 1);
  mySelect.option('50/50', 2);
  mySelect.option('60/40', 3);
  mySelect.option('70/30', 4);
  
  ratio = [
   [0.3, 0.4, 0.5, 0.6, 0.7],
   [0.7, 0.6, 0.5, 0.4, 0.3]
  ];
  
  //
  
  totalRectsSliderLabel = createP("Anzahl Spalten:");
  totalRectsSliderLabel.position(10, 200);
  
  totalRectsSlider = createSlider(3, 20, 8);
  totalRectsSlider.position(10, 240);
  totalRectsSlider.size(80);
  
  //
  
  let growthFactorSliderLabel = createP("Dynamik:");
  growthFactorSliderLabel.position(10, 250);
  
  growthFactorSlider = createSlider(10, 15, 14);
  growthFactorSlider.position(10, 290);
  growthFactorSlider.size(80);
  
  //

  let sliderXLabel = createP("X-Achse");
  sliderXLabel.position(10, 310);
  
  sliderX = createSlider(-1400, 140, -245);
  sliderX.position(10, 350);
  sliderX.size(150);
  
  //
  
  let sliderYLabel = createP("Y-Achse");
  sliderYLabel.position(10, 370);
  
  sliderY = createSlider(-100, 800, 495);
  sliderY.position(10, 460);
  sliderY.size(150);
  sliderY.style('transform', 'rotate(90deg)');
  
  //Download Button
  downloadButton = createButton('Dowload SVG');
  downloadButton.position(10, 600);
  downloadButton.mousePressed(() => {
    save('output.svg');
  });
  
}

function draw() {
  clear();
  renderer.drawingContext.__clearCanvas()
  
  //UI
  let myLetter = myLetterField.value()
  let myColor1 = myColor1Field.value()
  let myColor2 = myColor2Field.value()
  totalRectsSliderLabel.html("Anzahl Spalten: " + totalRectsSlider.value());
  
  
  background(myColor1);
  

  let totalRects = totalRectsSlider.value(); //Anzahl Wiederholungen, 3 - 10
  let growthFactor = growthFactorSlider.value()/10; //Verhältnis der Breiten zueinander 1.3 - 2
  
  //Funktion zum Berechnen der Breiten, sodass es für jedes Format aufgeht
  let totalWidth = 0;
  let widths = [];
  
  for (let i = 0; i < totalRects; i++) {
    let rectWidth = pow(growthFactor, i);
    widths.push(rectWidth);
    totalWidth += rectWidth;
  }

  let scaleFactor = width / totalWidth;
  let myPosition = 0;
  let myPosition2 = 0;
  let myRatio = mySelect.selected();
   
  fill(myColor2);
  textFont('Arial');
  textSize(fontSizeSlider.value());
  
  //Erste Zeile
  
  for (let i = 0; i < totalRects; i++) {
      
      let rectWidth = widths[i] * scaleFactor;

      push();
      rect(myPosition, 0, rectWidth, height*ratio[0][myRatio]);
      canvas.getContext('2d').clip();


      text(myLetter, sliderX.value() + myPosition, sliderY.value());

      pop();

      myPosition += rectWidth;
  }
  
  myPosition = 0;
  
  //Zweite Zeile
  
  for (let i = 0; i < totalRects; i++) {
      
      let rectWidth = widths[totalRects-1-i] * scaleFactor;

      push();
      rect(myPosition, height*ratio[0][myRatio], rectWidth, height*ratio[1][myRatio]); 
      canvas.getContext('2d').clip();

      text(myLetter, sliderX.value() + myPosition, sliderY.value() + height*ratio[0][myRatio]);      
      pop();

      myPosition += rectWidth;
  }
  
}
