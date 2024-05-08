
class TruckController {
    constructor(truckFormView, loadHallManager) {
        this.truckFormView = truckFormView;
        this.loadHallManager = loadHallManager;
    }

    bindListeners() {
        const submitButton = document.querySelector('#submit-button');
        submitButton.addEventListener('click', () => this.createTruck())
    }

    createTruck() {
        const currentLoadhall = this.loadHallManager.getCurrentLoadhall();
        if (currentLoadhall.assemblyLines.length > 0) {
            const lengthInput = document.querySelector('#length-input');
            const widthInput = document.querySelector('#width-input');
            const intervalInput = document.querySelector('#interval-input');
            const typeSelect = document.querySelector('#type-select');
            const truck = new Truck(lengthInput.value, widthInput.value, intervalInput.value, typeSelect.value);
            currentLoadhall.addTruck(truck);
            this.truckFormView.renderTruck(truck.length, truck.width);
        } else {
            alert('Please create an assembly line first.');
        }
    }
}