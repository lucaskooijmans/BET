class Truck {
    constructor(length, width, interval, type) {
        this.length = length;
        this.width = width;
        this.interval = interval;
        this.type = type;
        this.blocks = [];
        for (let i = 0; i < this.length; i++){
            let row = [];
            for (let j = 0; j < this.width; j++){
                row.push('O');
            }
            this.blocks.push(row);
        }
    }
}