class Image {
    constructor(capacity ,fuelconsumption , name , eventForEmptyFuel){
        this.logVahicle = [];
        this.eventForEmptyFuel = eventForEmptyFuel;
        this.name = name;
        this.moveDistance = 0;
        this.fuelconsumption = fuelconsumption;
        this.capacity = capacity;
        this.onMove = false;
        Vehicle.count += 1 ;
    }
    fillFuelBank(){
        var hex = '#' + (function co(lor){ return (lor += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]) && (lor.length == 6) ?  lor : co(lor); })('');
    }
    
    
    for(var event of this.moveCycleEvent){
        if(event.condition(this)){
            event.eventListener(this);
        }

    }
}