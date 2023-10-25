// DOM: Document Object Model

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, width, 10);
  slider.position(100, 100);
  
  cp = createColorPicker("gold");
  cp.position(100, 300);
  cp.change();
}

function draw() {
  background(255, 55, 155);
  let currentVal = slider.value();
  ellipse(currentVal, height/2, 30, 30);
}
