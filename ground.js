class Ground{
    constructor(){
        this.body=Bodies.rectangle(600,380,1200,10,{isStatic:true});
        this.width=1200;
        this.height=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill(255);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
