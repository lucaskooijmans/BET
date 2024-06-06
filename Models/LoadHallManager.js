class LoadHallManager {
    constructor() {
        this.loadhalls = [];
        this.currentLoadhall = 1;
        this.loadHallController;
    }

    addLoadhall(loadhall) {
        this.loadhalls.push(loadhall);
    }

    getCurrentLoadhall() {
        return this.loadhalls[this.currentLoadhall+1]; // +1 because the first 2 in the array are undefined?
    }

    switchLoadhall() {
        if(this.currentLoadhall == 1) {
            this.currentLoadhall = 2;
        }
        else {
            this.currentLoadhall = 1;
        }
        
        console.log(this.loadhalls)
        console.log(this.currentLoadhall)
    }

    setController(controller) {
        this.loadHallController = controller;
    }
}