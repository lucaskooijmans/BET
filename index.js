window.onload = function() {
    const loadhallView = new LoadHallView();
    const loadhallManager = new LoadHallManager();
    const loadhallController = new LoadHallController(loadhallView, loadhallManager);
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
}