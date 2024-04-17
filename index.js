window.onload = function() {
    let truckFormView = new TruckFormView();
    let truckManager = new TruckManager();
    let truckController = new TruckController(truckFormView, truckManager);
    truckController.bindListeners();
}