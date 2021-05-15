var back,backImg;

var PLAY=0;
var END=1;
var gameState=PLAY;

var thief,thiefImg;

var cashImg,cashGroup;
var diamondImg,diamondGroup;
var jewelImg,jewelGroup;
var swordImg,swordGroup;

var score=0;

var gameOver,gameOverImg;



function preload()
{
backImg=loadImage("Road.png");
thiefImg=loadAnimation("Runner-1.png","Runner-2.png");
cashImg=loadImage("cash.png");
diamondImg=loadImage("diamonds.png");
jewelImg=loadImage("jwell.png");
swordImg=loadImage("sword.png");
gameOverImg=loadImage("gameOver.png");
}


function setup()
{
  createCanvas(windowWidth,windowHeight);

back=createSprite(width/2,height/2);
back.addImage("road",backImg);

thief=createSprite(width/2,height-70);
thief.addAnimation("thief",thiefImg);
thief.scale=0.1;

cashGroup=new Group();
diamondGroup=new Group();
jewelGroup=new Group();
swordGroup=new Group();

gameOver=createSprite(width/2,height/2);
gameOver.addImage(gameOverImg);
}

function draw()
{
  background("white");
  drawSprites();


if(gameState==PLAY)
{
  back.velocityY=5;
    gameOver.visible=false;
    if(back.y>height)
    {
      back.y=height/2;
    }

  thief.x=World.mouseX; 

  textSize(30);
  fill("white");
  text("Treasure: "+score,width-250,height/2-250);

  if(score<=100000)
  {
  ob1();
  ob2();
  ob3();
  ob4();
  
  }

  if(score>100000 && score<=200000)
  {  
  ob1();
  ob2();
  ob3();
  ob4();
  ob4();
  }

  
  if(score>200000 && score<=300000)
  {
    ob1();
    ob2();
    ob3();
    ob4();
    ob4();
    ob4();
   
  }

  if(score>300000 && score<=400000)
  {
    ob1();
    ob2();
    ob3();
    ob4();
    ob4();
    ob4();
    ob4();
  }

  if(score>400000 && score<=500000)
  {
    ob1();
    ob2();
    ob3();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    
  }

  if(score>500000 && score<=600000)
  {
    ob1();
    ob2();
    ob3();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
  }
  if(score>600000 && score<=700000)
  {
    ob1();
    ob2();
    ob3();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    
  }

  if(score>700000 && score<=800000)
  {
  ob1();
  ob2();
  ob3();
  ob4();
  ob4();
  ob4();
  ob4();
  ob4();
  ob4();
  ob4();
  ob4();
  
  }

  if(score>800000 && score<=900000)
  {
    ob1();
    ob2();
    ob3();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    
  }

 if(score>900000 && score<=1000000)
  {
    ob1();
    ob2();
    ob3();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    ob4();
    
  }


  if(score>1000000)
   {
    
    back.velocityY=0;
    thief.visible=false;
    diamondGroup.destroyEach();
    cashGroup.destroyEach();
    jewelGroup.destroyEach();
    swordGroup.destroyEach();
 
    background("black");
    textSize(50);
    fill("white");
    text("You won!",width/2-100,height/2);
   }

  
  if(cashGroup.isTouching(thief))
  {
    cashGroup.destroyEach();
    score=score+500;
  }
  if(diamondGroup.isTouching(thief))
  {
    diamondGroup.destroyEach();
    score=score+50000;
  }
  if(jewelGroup.isTouching(thief))
  {
    jewelGroup.destroyEach();
    score=score+5000;
  }

  if(swordGroup.isTouching(thief))
  {
    swordGroup.destroyEach();
    gameState=END;
  }

}

  else if(gameState==END)
  {
   gameOver.visible=true;
   back.velocityY=0;
   thief.visible=false;
   diamondGroup.destroyEach();
   cashGroup.destroyEach();
   jewelGroup.destroyEach();
   swordGroup.destroyEach();

   textSize(30);
   fill("black");
   text("Treasure collected: "+score,gameOver.x-175,gameOver.y+100);

   textSize(30);
   fill("blue");
   text("Press 'enter' to start again",gameOver.x-175,gameOver.y+200);


   if(keyDown("enter"))
   {
     restart()
   }

  }
  

}

function ob1()
{
  if(frameCount%100==0)
  {
  var cash=createSprite((Math.round(random(0,width))),0);
  cash.addImage(cashImg);
  cash.velocityY=5;
  cash.scale=0.1;
  cash.lifetime=300;
  cashGroup.add(cash);
  }
}

function ob2()
{
  if(frameCount%425==0)
  {
  var diamond=createSprite((Math.round(random(0,width))),0);
  diamond.addImage(diamondImg);
  diamond.velocityY=5;
  diamond.scale=0.05;
  diamond.lifetime=300;
  diamondGroup.add(diamond);
  }
}

function ob3()
{
  if(frameCount%325==0)
  {
  var jewel=createSprite((Math.round(random(0,width))),0);
  jewel.addImage(jewelImg);
  jewel.velocityY=5;
  jewel.scale=0.1;
  jewel.lifetime=300;
  jewelGroup.add(jewel);
  }
}

function ob4()
{
  if(frameCount%150==0)
  {
  var sword=createSprite((Math.round(random(0,width))),0);
  sword.addImage(swordImg);
  sword.velocityY=5;
  sword.scale=0.1;
  sword.lifetime=300;
  swordGroup.add(sword);
  }
}

function restart()
{
  gameState=PLAY;
  score=0;
  thief.visible=true;
}