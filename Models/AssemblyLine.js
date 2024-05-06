class AssemblyLine {
    constructor() {
        this.queue = [];
        this.maxSize = 4;
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