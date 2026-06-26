let shapeColor1
//let shapeColor2


function setup() {

    createCanvas(1500,775);

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

    //background(255);


    if (frameCount % 30 === 0){

        fill(shapeColor1);
        square(464,200,287.5);

        fill(164, 195, 178);
        square(751.5,200,287.5);

        fill(244, 226, 133);
        square(464,487.5,287.5);

        fill(234, 242, 215);
        square(751.5,487.5,287.5);
    
    }

 }

    

