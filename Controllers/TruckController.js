
class TruckController {
    constructor(truckFormView, truckManager, loadHallManager) {
        this.truckFormView = truckFormView;
        this.truckManager = truckManager;
        this.loadHallManager = loadHallManager;
    }

    bindListeners() {
        const submitButton = document.querySelector('#submit-button');
        submitButton.addEventListener('click', () => this.createTruck())
    }

    createTruck() {
        const lengthInput = document.querySelector('#length-input');
        const widthInput = document.querySelector('#width-input');
        const intervalInput = document.querySelector('#interval-input');
        const typeSelect = document.querySelector('#type-select');
        const truck = new Truck(lengthInput.value, widthInput.value, intervalInput.value, typeSelect.value);
        this.truckManager.add(truck);
        this.truckFormView.renderTruck(truck.length, truck.width);
    }
}