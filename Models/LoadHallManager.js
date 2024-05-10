class LoadHallManager {
    constructor() {
        this.loadhalls = [];
        this.currentLoadhall = 1;
    }

    addLoadhall(loadhall) {
        this.loadhalls.push(loadhall);
    }

    removeLoadhall(loadhall) {
        const index = this.loadhalls.indexOf(loadhall);
        return this.loadhalls.splice(index, 1);
    }

    getCurrentLoadhall() {
        return this.loadhalls[this.currentLoadhall];
    }

    switchLoadhall() {
        console.log(this.currentLoadhall)
        if (this.currentLoadhall == 0) {
            this.currentLoadhall = 1;
        }
        else {
            this.currentLoadhall = 0;
        }
    }
}