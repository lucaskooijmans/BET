class AssemblyLine {
    constructor() {
        this.tetrominoAmount = 0;
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
        if(this.tetrominoAmount < this.maxSize){
            this.tetrominoAmount++;
            return true;
        }
        return false;
    }

    setTetrominoAmount(amount) {
        this.tetrominoAmount = amount;
    }

    popTetromino() {
        return this.queue.pop();
    }
}