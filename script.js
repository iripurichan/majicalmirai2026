let x_shapes;
let y_shapes;
let size;

let colors1 = [

color(182, 220, 254),
color(129, 247, 229),
color(255, 191, 216),
color(239, 247, 246)

];

const BOX_X = 650;
const BOX_Y = 337.5;
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

    fill(128, 255, 219);
    square(BOX_X, BOX_Y, BOX_W);

    fill(random(colors1));
    circle(x_shapes, y_shapes, size);
}
