let x_shapes;
let y_shapes;
let size;
let shapeColor1
//let shapeColor2


function setup() {


    createCanvas(1300, 675);

    colors1 = [

    color(182, 220, 254),
    color(129, 247, 229),
    color(7, 113, 135),
    color(83, 89, 154)

    ];
    shapeColor1 = random(colors1);

    //colors2 = [

    //color(205, 180, 219),
   // color(255, 175, 204),
    //color(213, 93, 146),
    //color(228, 63, 111)


   // ];

    //shapeColor2 = random(colors2);


}

function draw() {

    background(0);

    fill(255);
    quad(0, 25, 1300, 25, 1300, 650, 0, 650);

    if (frameCount % 10 === 0){

    fill(shapeColor1);
    square(random(0,1300),random(25,650),random(0,500))

    }

    
}
