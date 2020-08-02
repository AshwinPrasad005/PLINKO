class Particle{
    constructor(x,y,radius,color){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.radius = radius;
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        push();
        ellipseMode(CENTER);
        fill("red");
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}