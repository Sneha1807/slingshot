class Box{
    constructor(x,y,width,height){
        var options={
            density:1,
            restitution:0.5,
            isStatic:false,
            friction:0.1
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var rand1=Math.round(random(0,4));
        var colors=["red","blue","green","yellow","white"];
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(colors[rand1]);
        rect(0,0,this.width,this.height);
        pop();
        
        
        
    }
}