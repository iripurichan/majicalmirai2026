let x_shapes;
let y_shapes;
let size;
let shapeColor1


function setup() {
    createCanvas(1300, 675);

    colors1 = [

    color(182, 220, 254),
    color(129, 247, 229),
    color(255, 191, 216),
    color(239, 247, 246)

    ];
    shapeColor1 = random(colors1);

}

function draw() {
    background(0);

    fill(255);
    quad(0, 25, 1300, 25, 1300, 650, 0, 650);

    fill(shapeColor1);
    square1(0,25,325)

    fill(shapeColor1);
    square2(325, 350, 325)

    fill(shapeColor1);
    square3(650, 350, 325)

    fill(shapeColor1);
    square4(975, 675, 325)


    
}
