class Rope{
    constructor(bodyA,pointB){
       
        var options ={
            bodyA: bodyA,
            pointB: pointB,
 
            stiffness: 0.05,
        
        }
        this.rope1 = Constraint.create(options);
        World.add(world,this.rope1);
    }
    display(){
     var pointA=this.rope1.bodyA.position;
     var xyz=this.rope1.pointB;

    

     strokeWeight(5);
     line(pointA.x,pointA.y,xyz.x,xyz.y);

    }
}