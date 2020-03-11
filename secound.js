// Writed by SA.mirkhalili
setTimeout(() => {
    run()
}, 3000);

class Vehicle {
    constructor(capacity , name){
        this.name = name ;
        this.moveDistance = 0 ;
        this.capacity = capacity ;
        this.onMove = false ;
    }
    startMove(speed){
        this.speed = speed ;
        this.onMove = true ; 
        this.move();  
    }
    move(){
        if(this.onMove){
            setTimeout(() => {
                this.moveDistance += this.speed * 1000 / 3600 ;
                console.log(`${this.name} have move ${this.moveDistance} meter`);
                this.move();
            }, 1000);
        }
    };
    stop(){
        this.speed = 0 ;
        this.onMove = false ;
    }
}

function run(){
    var hcCross = new Vehicle(5 , 'abolfazlCar') ;
    hcCross.startMove(60);
    var mahmoodCycle = new Vehicle(1 , 'mahmoodCycle') ;
    mahmoodCycle.startMove(15) ; 
    setTimeout(() => {
        hcCross.stop();
    }, 5000);
    setTimeout(() => {
        mahmoodCycle.stop();
    }, 10000);
}