class LoadHallManager {
    constructor() {
        this.trucks = [];
        this.conveyerbelts = []; // TODO
    }

    addTruck(truck) {
        this.trucks.push(truck);
        console.log('Added truck to loadhall');
    }

    removeTruck(truck) {
        const index = this.trucks.indexOf(truck);
        return this.trucks.splice(index, 1);
    }

    addConveyerBelt() { 

    }

}