const initialValue = 90;
let fiboLength = initialValue;

function setup() {
  let canvas = createCanvas(displayWidth / 2 , displayHeight / 2);
  canvas.parent('container');
}

function drawFibonnaci(to) {
  const FIBO = TWO_PI * (sqrt(5) - 1) * 0.5;
  
  background(255);
  colorMode(HSB, 255);
  
  translate(width * 0.5, height * 0.5);
  stroke(0, 0, 0);

  while (to--) {
     ellipse(cos(FIBO * to) * to, sin(FIBO * to) * to, 10, 10);
  }

  if (fiboLength !== 0) {
    fiboLength = fiboLength - 1;
  } else if (fiboLength === 0 && fiboLength != initialValue) {
      reset(20);
  }

}

function draw() {
  drawFibonnaci(fiboLength);
}

function reset(n) {
  fiboLength = n;
}


document.getElementById('reset').onclick = () => {
  reset(initialValue);
}
