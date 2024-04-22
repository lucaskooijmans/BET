class LoadHall {
    constructor() {
        this.trucks = [];
        this.assemblyLines = [];
    }

    addTruck(truck) {
        this.trucks.push(truck);
        console.log('Added truck to loadhall');
    }

    removeTruck(truck) {
        const index = this.trucks.indexOf(truck);
        return this.trucks.splice(index, 1);
    }

    addAssemblyLine(assemblyLine) {
        this.assemblyLines.push(assemblyLine);
    }

    removeAssemblyLine(assemblyLine) {
        const index = this.assemblyLines.indexOf(assemblyLine);
        return this.assemblyLines.splice(index, 1);
    }
}