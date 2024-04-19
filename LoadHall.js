class LoadHall {
    constructor() {
        this.trucks = [];
        this.conveyerbelts = [];
    }

    addTrucks(truck) {
        this.trucks.push(truck);
    }

    remove(truck) {
        const index = this.trucks.indexOf(truck);
        return this.trucks.splice(index, 1);
    }
}