class LoadHallController {
    constructor(loadHallView, loadHallManager) {
        this.loadHallView = loadHallView;
        this.loadHallManager = loadHallManager;
        this.loadHallViews = new Map(); // Map to store LoadHall to LoadHallView associations
        this.savedContent = new Map(); // Map to store saved content for each LoadHall
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
        // Get the current LoadHall
        const currentLoadhall = this.loadHallManager.getCurrentLoadhall();

        // Get the current LoadHallView
        const currentLoadhallView = this.getLoadhallView(currentLoadhall);

        // Save the current content of the truck-assembly-line-container div
        const truckAssemblyLineContainer = document.querySelector('#truck-assembly-line-container');
        this.savedContent.set(currentLoadhall, truckAssemblyLineContainer.innerHTML);

        // Switch to the other LoadHall
        this.loadHallManager.switchLoadhall();

        // Get the new LoadHall
        const newLoadhall = this.loadHallManager.getCurrentLoadhall();

        // Update the current-loadhall div with the new LoadHall
        const currentLoadhallDiv = document.querySelector('#current-loadhall');
        currentLoadhallDiv.innerHTML = `Current Loadhall: ${newLoadhall.id} of 2`;

        // Get the new LoadHallView
        const newLoadhallView = this.getLoadhallView(newLoadhall);

        // Restore the saved content for the new LoadHall, if any
        if (this.savedContent.has(newLoadhall)) {
            truckAssemblyLineContainer.innerHTML = this.savedContent.get(newLoadhall);
        } else {
            truckAssemblyLineContainer.innerHTML = '';
        }
    }
}