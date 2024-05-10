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
        console.log('test')
        this.currentLoadhall = (this.currentLoadhall + 1) % this.loadhalls.length;
    }

    saveToLocalStorage() {
        localStorage.setItem('loadhalls', JSON.stringify(this.loadhalls));
    }

    loadFromLocalStorage() {
        const loadhalls = JSON.parse(localStorage.getItem('loadhalls'));
        if (loadhalls) {
            return loadhalls.map(loadhallData => {
                const loadhall = new LoadHall();
                loadhall.trucks = loadhallData.trucks;
                loadhall.assemblyLines = loadhallData.assemblyLines;
                return loadhall;
            });
        }
    }
}