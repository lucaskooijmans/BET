class LoadHallController {
    constructor(loadHallView, loadHallManager) {
        this.loadHallView = loadHallView;
        this.loadHallManager = loadHallManager;
    }

    initializeLoadhalls() {
        this.loadHallManager.addLoadhall(new LoadHall());
        this.loadHallManager.addLoadhall(new LoadHall());
    }
}