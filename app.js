class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep";
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model}, ${this.year}.`
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numWheels){

        super(make, model, year);
        this.numWheels = numWheels;

    }
}


class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels){
        super(make, model, year);
        this.numWheels = numWheels
    }
    revEngine(){
        return "VROOM!!!"
    }
}

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle){
        if(newVehicle instanceof Vehicle === false){
            
            return "Only Vehicles are allowed in here!"
        }
        else if(this.vehicles.length < this.capacity){
            this.vehicles.push(newVehicle)
            return "Vehicle added!"
        }else{
            return "Sorry, we're full."
        }
    }


}