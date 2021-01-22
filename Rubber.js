class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      //this.width = width;
      //this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(50);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(105);
      ellipse(500, 0, 50);
      pop();
    }
  }
  