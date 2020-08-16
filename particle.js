class Particle{
    constructor(x,y,radius){
        var options = {
            "restitution":0.4
        }
        this.body = Bodies.circle(x,y,radius,options);
        // this.color = color(random(0,255),random(0,255),random(0,255));
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        noStroke();
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}