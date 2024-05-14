class LoadHall {
    constructor(id) {
        this.id = id;
        this.trucks = [];
        this.assemblyLines = [];
    }

    addTruck(truck) {
        this.trucks.push(truck);
        console.log('Added truck to loadhall');
    }

    addAssemblyLine(assemblyLine) {
        this.assemblyLines.push(assemblyLine);
    }

    removeAssemblyLine(assemblyLine) {
        const index = this.assemblyLines.indexOf(assemblyLine);
        return this.assemblyLines.splice(index, 1);
    }
}