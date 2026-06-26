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

    background(61, 64, 91);


    fill(233, 236, 239);
    quad(0, 50, 1300, 50, 1300, 625, 0, 625);


    fill(shapeColor1);
    square(0,208,325);

    fill(shapeColor1);
    square(325,208,325);

    fill(shapeColor1);
    square(650,208,325);

    fill(shapeColor1);
    square(975,208,325);




    }

    

