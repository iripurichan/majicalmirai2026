let mode = 0;
let miku;

function preload(){

    miku = loadImage('mikuchan.png'); 
}

function setup() {

    createCanvas(1500,775);




}

function draw() {

    background(0);

    if(mode == 0){

        fill(255);
        circle(750,387.5,500);

        image(miku,650,287.5);


    }

 }

    

