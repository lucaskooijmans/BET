window.onload = function() {
    const loadhallView = new LoadHallView();
    const loadhallManager = new LoadHallManager();
    const loadhallController = new LoadHallController(loadhallView, loadhallManager);

    // Create two LoadHalls
    const loadhall1 = new LoadHall();
    const loadhall2 = new LoadHall();

    // Add the LoadHalls to the LoadHallManager
    loadhallManager.addLoadhall(loadhall1);
    loadhallManager.addLoadhall(loadhall2);

    // Initialize LoadHalls
    loadhallController.initializeLoadhalls();

    const truckFormView = new TruckFormView();
    const truckController = new TruckController(truckFormView, loadhallManager);
    truckController.bindListeners();

    const shapeView = new ShapeView();
    const shapeFactory = new ShapeFactory();
    const shapeController = new ShapeController(shapeView, shapeFactory, loadhallManager);

    const assemblyLineView = new AssemblyLineView();
    const assemblyLineController = new AssemblyLineController(assemblyLineView, loadhallManager, shapeFactory);
    assemblyLineController.bindListeners();

    const switchLoadhallButton = document.querySelector('#switch-loadhall-button');
    switchLoadhallButton.addEventListener('click', function() {
        loadhallManager.switchLoadhall();
        loadhallView.renderLoadHall(loadhallManager.getCurrentLoadhall());
    });
}