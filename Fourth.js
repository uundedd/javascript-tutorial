// Writed by SA.Mirkhalili
// Sample class
setTimeout(() => {
        run();
    },
    500);
class Vehicle {
    constructor(capacity, fuelconsumption, name, eventForEmptyFuel) {
        this.logVahicle = [];
        this.eventForEmptyFuel = eventForEmptyFuel;
        this.name = name;
        this.moveDistance = 0;
        this.fuelconsumption = fuelconsumption;
        this.capacity = capacity;
        this.onMove = false;
        Vehicle.count += 1;
    }
    fillFuelBank(fuel) {
        this.fuel = fuel;
    }
    startMove(speed) {
        this.speed = speed;
        this.onMove = true;
        this.lastStart = new Date();
        this.moveCycle();

    }
    moveCycle() {
        if (this.onMove && this.fuel > 0 && Vehicle.run) {
            setTimeout(() => {
                var moveDistanceInOneSecound = this.speed * 1000 / 3600;
                this.moveDistance += moveDistanceInOneSecound;
                this.fuel -= this.fuelconsumption * moveDistanceInOneSecound / 100000;
                console.log(`${this.name} have move ${this.moveDistance} meter and ${this.fuel} liters of fuel`);
                if (this.moveCycleEvent) {
                    for (var event of this.moveCycleEvent) {
                        if (event.condition(this)) {
                            event.eventListener(this);
                        }
                    }
                }
                this.moveCycle();
            }, 1000);
        } else if (this.fuel <= 0) {
            console.log('vehicle stop because the fuel is empty');
            this.stop('the fuel is run out');
            this.eventForEmptyFuel();
        } else if (Vehicle.run === false) {
            this.stop('the car is disable vehicle');
        };

    };
    fuelConsumed() {
        return this.moveDistance * this.fuelconsumption / 100000;
    }
    stop(description) {
        this.speed = 0;
        this.onMove = false;
        var stopTime = new Date();
        this.logVahicle.push({
            starttime: this.lastStart,
            endtime: stopTime,
            description: description
        });
        console.log(this.logVahicle);
    }
}
Vehicle.count = 0;
Vehicle.run = true;

function run() {
    var p206 = new Vehicle(5, 90, 'mahmood', function () {});
    var hcCross = new Vehicle(5, 90, 'abolfazlCar', function () {});
    hcCross.fillFuelBank(20);
    hcCross.startMove(280);
    p206.fillFuelBank(80);
    p206.startMove(480);
    console.log(Vehicle.count);
    setTimeout(() => {
        Vehicle.run = false;
    }, 3000);
}