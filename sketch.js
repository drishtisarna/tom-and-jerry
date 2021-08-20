
function preload() {
  
    tomimg = loadImage("images/mouse1.png");
    bgimg = loadImage("images/garden.png");
    catimg = loadImage("images/cat1.png");
    catrunningimg = loadAnimation("images/cat2.png","images/cat3.png");
    tommovingimg = loadAnimation("images/mouse2.png","images/mouse3.png");
    tomteasingimg= loadAnimation("images/mouse4.png");
    catsittingimg= loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);

    tom = createSprite(200,600);
    tom.addImage(tomimg);
    tom.scale = 0.2;

    cat= createSprite(800,600);
    cat.addImage(catimg)
    cat.scale = 0.2;

}

function draw() {

    background(bgimg);

    if (cat.x-tom.x<(cat.width-tom.width)/2){

        cat.velocityX = 0;
        cat.x = 325;
        tom.addAnimation("tomteasing",tomteasingimg);
        tom.changeAnimation("tomteasing");
        cat.addAnimation("catsitting",catsittingimg);
        cat.changeAnimation("catsitting");

    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catrunning",catrunningimg);
        cat.changeAnimation("catrunning");
        tom.addAnimation("tommoving",tommovingimg);
        tom.changeAnimation("tommoving");
	}


}
