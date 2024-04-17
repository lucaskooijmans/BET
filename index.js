window.onload = function() {
    const truckFormView = new TruckFormView();
    const truckManager = new TruckManager();
    const truckController = new TruckController(truckFormView, truckManager);
    truckController.bindListeners();

    const assemblyLineView = new AssemblyLineView();
    const assemblyLineManager = new AssemblyLineManager();
    const assemblyLineController = new AssemblyLineController(assemblyLineView, assemblyLineManager);
    assemblyLineController.bindListeners();
}