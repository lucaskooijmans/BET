class AssemblyLine {
    constructor() {
        this.queue = [];
        this.maxSize = 5;
        this.truck = null;
    }

    assignTruck(truck) {
        if (this.truck === null) {
            this.truck = truck;
            return true;
        }
        return false;
    }

    getTruck() {        
        return this.truck;
    }

    addTetromino(tetromino) {
        if(this.queue.length < this.maxSize){
            this.queue.push(tetromino);
            return true;
        }
        return false;
    }

    popTetromino() {
        return this.queue.pop();
    }
}