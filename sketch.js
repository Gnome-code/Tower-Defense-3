const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var sling, polygon, base, base2, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16
var base3, box17, box18, box19, box20, box21, box22, box23, box24, box25, bg
var score = 0

function preload()
{
	//getBackgroundimg();
}

function setup() {
	createCanvas(1200, 400);
  

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  base2 = new Ground(600, 400, width, 20)
	polygon = new Polygon(150, 200, 40)
  sling = new SlingShot(polygon.body,{x:150,y:200})
  base = new Ground(805, 300, 210, 20)
  base3 = new Ground(1095, 200, 150, 20)
  Engine.run(engine);
  //layer 1
  box1 = new Box(715, 260, 30, 40)
  box2 = new Box(745, 260, 30, 40)
  box3 = new Box(775, 260, 30, 40)
  box4 = new Box(805, 260, 30, 40)
  box5 = new Box(835, 260, 30, 40)
  box6 = new Box(865, 260, 30, 40)
  box7 = new Box(895, 260, 30, 40)
  //layer 2
  box8 = new Box(745, 220, 30, 40)
  box9 = new Box(775, 220, 30, 40)
  box10 = new Box(805, 220, 30, 40)
  box11 = new Box(835, 220, 30, 40)
  box12 = new Box(865, 220, 30, 40)
  //layer 3
  box13 = new Box(775, 180, 30, 40)
  box14 = new Box(805, 180, 30, 40)
  box15 = new Box(835, 180, 30, 40)
  //layer 4
  box16 = new Box(805, 140, 30, 40)
  //layer 2-1
  box17 = new Box(1035, 160, 30, 40)
  box18 = new Box(1065, 160, 30, 40)
  box19 = new Box(1095, 160, 30, 40)
  box20 = new Box(1125, 160, 30, 40)
  box21 = new Box(1155, 160, 30, 40)
  //layer 2-2
  box22 = new Box(1065, 120, 30, 40)
  box23 = new Box(1095, 120, 30, 40)
  box24 = new Box(1125, 120, 30, 40)
  //layer 2-3
  box25 = new Box(1095, 80, 30, 40)


  
  
}


function draw() {
     
 
  //if(bg){
        //background(bg);
        background(28, 20, 10);
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
  //}  
     
        

  //Engine.update(engine)
 
  rectMode(CENTER);
  polygon.display();
  sling.display();
  base.display();
  base3.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  box25.display();
  box25.score();

  
  
  
  
  

 

 
 
 
}

function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body, {x:150, y:200})
     sling.attach(polygon.body);
  }
}

//async function getBackgroundimg (){

 // var response = await fetch ('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
 // var responseJson = await response.json();
 // var time = responseJson.datetime;
 // var hour = time.slice(11,13);
 // console.log(hour)
 // if (hour > 6 && hour < 15){
  
 // bg = color(28, 20, 10)
  
 // }
  
  //else{
  
 // bg = color("lightblue")
  
  //}
  
 // background(bg)
  
 // }