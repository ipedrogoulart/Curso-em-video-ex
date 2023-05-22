let theta = []
let r = 100
let c = []
let n = 5

function setup() {
  createCanvas(800, 800)
  strokeWeight(10)
  for (let i = 0; i < n; i++) {
    theta.push(random(0, 2 * PI))
    c.push(createVector(400, 400))
  }
}

function draw() {
  background(999)

  for (let i = 0; i < n; i++) {
    theta[i] = theta[i] + PI / 100
    x = c[i].x + r * cos(theta[i])
    y = c[i].y + r * sin(theta[i])
    // point(x, y)
    square(x, y, 10)
  }
}