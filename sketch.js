var mr,fr
function setup() {
  createCanvas(1200,800);
  fr=createSprite(400, 100, 50, 50);
  mr=createSprite(400,600,100,50)
  mr.velocityY=-5
  fr.velocityY=+5
  fr.debug=true
  mr.debug=true
}

function draw() {
  background("black"); 
  
  if(mr.x-fr.x<fr.width/2+mr.width/2 && fr.x-mr.x<fr.width/2+mr.width/2 && mr.y-fr.y<fr.height/2+mr.height/2 &&
     fr.y-mr.y<fr.height/2+mr.height/2){
     mr.shapeColor="red"
     fr.shapeColor="red"


  }
  else{fr.shapeColor="blue"
  mr.shapeColor="pink"}
  





  drawSprites();
}