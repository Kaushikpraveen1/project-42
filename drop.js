class Drop {
    constructor(x,y){
        var options = {
            friction:0.001,
            restitution:0.1
        }
        
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain)
        //load Image for BestMan
        
    }

    showDrop(){
        var pos = this.rain.position;
        fill("blue");
        elipseMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        elipse(pos.x,pos.y,this.radius,this.radius);
    }
    update(){
        
    }
}
