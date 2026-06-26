let mode = 0;
let miku;

function preload(){

    miku = loadImage('mikuchan.png'); 
}

function setup() {

    createCanvas(windowWidht,WindowHeight);




}

function draw() {

    background(0);

    if(mode == 0){

        fill(255);
        circle(width/2,height/2,500);

        imageMode(CENTER);
        image(miku,width/2,height/2);


    }

 }

    

