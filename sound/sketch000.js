let song;
let song1

function preload() {
  song = loadSound("./epic-hip-hop.mp3");
  song1 = loadSound("./funny-tango.mp3");
}

function nextSong() {
  song1.play();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(song.duration());
  song.playMode('restart');
  song.onended(nextSong());
}

function draw() {
  if (song.isPlaying()) {
    background(20, 220, 120);
  }  else if (song.isPaused()) {
    background(20,120,220);
  } else {
    background(220, 20, 120);
  }
}

function mouseClicked() {
  song.play();
}

function keyReleased() {
  if (key == "s") {
    song.stop();
  } else if (key == "p") {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }
}