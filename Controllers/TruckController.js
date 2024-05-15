
class TruckController {
    constructor(truckFormView, loadHallManager) {
        this.truckFormView = truckFormView;
        this.loadHallManager = loadHallManager;
        this.currentStep = 0;
    }

    bindListeners() {
        const nextButton1 = document.querySelector('#next-button-1');
        nextButton1.addEventListener('click', () => {
            const lengthInput = document.querySelector('#length-input');
            if (this.validateInput(lengthInput.value)) {
                this.nextStep();
            }
        });

        const prevButton1 = document.querySelector('#prev-button-1');
        prevButton1.addEventListener('click', () => this.prevStep());

        const nextButton2 = document.querySelector('#next-button-2');
        nextButton2.addEventListener('click', () => {
            const widthInput = document.querySelector('#width-input');
            if (this.validateInput(widthInput.value)) {
                this.nextStep();
            }
        });

        const prevButton2 = document.querySelector('#prev-button-2');
        prevButton2.addEventListener('click', () => this.prevStep());

        const nextButton3 = document.querySelector('#next-button-3');
        nextButton3.addEventListener('click', () => {
            const intervalInput = document.querySelector('#interval-input');
            if (this.validateInput(intervalInput.value)) {
                this.nextStep();
            }
        });

        const prevButton3 = document.querySelector('#prev-button-3');
        prevButton3.addEventListener('click', () => this.prevStep());

        const submitButton = document.querySelector('#submit-button');
        submitButton.addEventListener('click', () => {
            this.createTruck();
            this.resetForm();
        });
    }

    nextStep() {
        const formSteps = document.querySelectorAll('.form-step');
        formSteps[this.currentStep].classList.add('hidden');
        this.currentStep++;
        formSteps[this.currentStep].classList.remove('hidden');
    }

    prevStep() {
        const formSteps = document.querySelectorAll('.form-step');
        formSteps[this.currentStep].classList.add('hidden');
        this.currentStep--;
        formSteps[this.currentStep].classList.remove('hidden');
    }

    resetForm() {
        // Clear inputs
        const lengthInput = document.querySelector('#length-input');
        lengthInput.value = '';

        const widthInput = document.querySelector('#width-input');
        widthInput.value = '';

        const intervalInput = document.querySelector('#interval-input');
        intervalInput.value = '';

        const typeSelect = document.querySelector('#type-select');
        typeSelect.selectedIndex = 0;

        // Reset form steps
        const formSteps = document.querySelectorAll('.form-step');
        formSteps.forEach((step, index) => {
            if (index === 0) {
                step.classList.remove('hidden');
            } else {
                step.classList.add('hidden');
            }
        });
        this.currentStep = 0;
    }

    validateInput(value) {
        if (value > 10) {
            alert('Input cannot be greater than 10');
            return false;
        }
        return true;
    }

    createTruck() {
        const currentLoadhall = this.loadHallManager.getCurrentLoadhall();
        if (currentLoadhall.assemblyLines.length > 0) {
            const lengthInput = document.querySelector('#length-input');
            const widthInput = document.querySelector('#width-input');

            const intervalInput = document.querySelector('#interval-input');
            this.truckFormView.setInterval(intervalInput.value);

            const typeSelect = document.querySelector('#type-select');
            const truck = new Truck(lengthInput.value, widthInput.value, intervalInput.value, typeSelect.value);
            // Find an assembly line that doesn't have a truck assigned
            const assemblyLine = currentLoadhall.assemblyLines.find(line => line.truck === null);
            if (assemblyLine) {
                assemblyLine.assignTruck(truck);
                currentLoadhall.addTruck(truck);
                this.truckFormView.renderTruck(truck.length, truck.width);
            } else {
                alert('All assembly lines have a truck assigned. Please create a new assembly line.');
            }
        } else {
            alert('Please create an assembly line first.');
        }
    }

    getTruck() {
        const assemblyLine = currentLoadhall.assemblyLines.find(line => line.truck === null);
        if (assemblyLine) {
            assemblyLine.getTruck();
        }
    }
}