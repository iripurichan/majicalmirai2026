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
    quad(0, 25, 1300, 25, 1300, 650, 0, 650);


    fill(240, 128, 128);
    square(325,25,325);

    fill(164, 195, 178);
    square(650,25,325);

    fill(244, 226, 133);
    square(325,350,325);

    fill(234, 242, 215);
    square(650,350,325);




    }

    

