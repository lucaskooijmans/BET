class LoadHallController {
    constructor(loadHallView, loadHallManager) {
        this.loadHallView = loadHallView;
        this.loadHallManager = loadHallManager;
    }

    createLoadHall() {
        const trucks = this.loadHallManager.trucks;
        const conveyerbelts = this.loadHallManager.conveyerbelts;

        const loadHall = new LoadHall(this.loadHallId++, trucks, conveyerbelts);
        this.loadHallView.renderLoadHall(loadHall);
    }

    removeLoadHall() {
        
    }
}