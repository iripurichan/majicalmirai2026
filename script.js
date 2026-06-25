let x_shapes;
let y_shapes;
let size;

const BOX_X = 300;
const BOX_Y = 150;
const BOX_W = 500;
const BOX_H = 500;

function setup() {
    createCanvas(1300, 675);

    x_shapes = random(BOX_X, BOX_X + BOX_W);
    y_shapes = random(BOX_Y, BOX_Y + BOX_H);

    size = random(100);
}

function draw() {
    background(255);

    rectMode(CORNER);
    fill(128, 255, 219);

    square(BOX_X, BOX_Y, BOX_W);

    fill(255, 0, 0);
    circle(x_shapes, y_shapes, size);
}
