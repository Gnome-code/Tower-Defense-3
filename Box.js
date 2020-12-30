class Box {
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.0,
      }
      this.visibility = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
      
    }

    score(){
      if(this.visibility<0 && this.visibility>-105){
        score = score + 1
      }
    }
    


    display(){
      if(this.body.speed <3){
      var angle = this.body.angle;
      var pos= this.body.position;
      fill(189, 252, 247);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      tint(255,this.visibility)
      pop();
     
     
    }
  }
       
   
 
}