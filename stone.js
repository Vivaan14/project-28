class stone{
    constructor(x,y,width,height){
        var options ={
        isStatic:true,
        restitution: 0,
        friction:1,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.image = loadImage("stone.png")
        World.add(world,this.body);
        }
        display(){
            var groundpos = this.body.position;
            push();
            translate(groundpos.x,groundpos.y);
            imageMode(CENTER);
            strokeWeight(3);
            image(this.image,0,0,this.width,this.height);
            pop()
        }
    }
