class Ground extends Box{
    constructor(x,y,width,height){
        super(x,y,width,height);
        Matter.Body.setStatic(this.body,true);
    }
    display(){
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}