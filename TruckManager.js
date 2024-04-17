class TruckManager {
    constructor() {
        this.trucks = [];
    }

    add(truck) {
        this.trucks.push(truck);
        console.log(`added truck length:${truck.length}|width:${truck.width}`);
    }

    remove(truck) {
        const index = this.trucks.indexOf(truck);
        return this.trucks.splice(index, 1);
    }
}