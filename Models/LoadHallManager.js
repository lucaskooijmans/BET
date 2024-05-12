class LoadHallManager {
    constructor() {
        this.loadhalls = [];
        this.currentLoadhall = 1;
        this.loadHallController;
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
        // // Switch to the other LoadHall
        // this.currentLoadhall = (this.currentLoadhall + 1) % this.loadhalls.length;

        console.log(this.loadhalls);

        if(this.currentLoadhall == 1) {
            this.currentLoadhall = 0;
        }
        else {
            this.currentLoadhall = 1;
        }
    }

    setController(controller) {
        this.loadHallController = controller;
    }
}