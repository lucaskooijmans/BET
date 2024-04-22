class AssemblyLineManager {
    constructor() {
        this.assemblyLines = []
    }

    add(assemblyLine) {
        this.assemblyLines.push(assemblyLine);
    }

    remove(assemblyLine) {
        const index = this.assemblyLines.indexOf(assemblyLine);
        return this.assemblyLines.splice(index, 1);
    }
}