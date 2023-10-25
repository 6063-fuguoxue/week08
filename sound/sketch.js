let song;

function preload() {
  song = loadSound("./funny-tango.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  samples = song.getPeaks();
}

function draw() {
  push();
  translate(0, height/2);

}