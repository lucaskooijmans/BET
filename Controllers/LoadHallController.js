class LoadHallController {
    constructor(loadHallView, loadHallManager) {
        this.loadHallView = loadHallView;
        this.loadHallManager = loadHallManager;
        this.loadHallViews = new Map(); // Map to store LoadHall to LoadHallView associations
    }

    initializeLoadhalls() {
        this.loadHallManager.addLoadhall(new LoadHall(1));
        this.loadHallManager.addLoadhall(new LoadHall(2));
        // Initialize LoadHallView for each LoadHall and store it in the map
        this.loadHallManager.loadhalls.forEach(loadhall => {
            const loadhallView = new LoadHallView(loadhall);
            this.loadHallViews.set(loadhall, loadhallView);
        });
    }

    getLoadhallView(loadhall) {
        // Return the LoadHallView associated with the given LoadHall
        return this.loadHallViews.get(loadhall);
    }

    switchLoadhall() {
        // Get the current LoadHallView
        const currentLoadhallView = this.getLoadhallView(this.loadHallManager.getCurrentLoadhall());

        console.log(currentLoadhallView)
        // Hide the current LoadHall
        currentLoadhallView.hide();

        console.log(currentLoadhallView)

        // Switch to the other LoadHall
        this.loadHallManager.switchLoadhall();

        // Get the new LoadHallView
        const newLoadhallView = this.getLoadhallView(this.loadHallManager.getCurrentLoadhall());

        // Show the new LoadHall
        newLoadhallView.show();
    }
}