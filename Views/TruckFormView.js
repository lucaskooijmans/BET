class TruckFormView {
    constructor() {
        this.truckController = null;
        this.weather = {
            rain: false,
            snow: false,
            temperature: 0,
            windSpeed: 0
        };
    }

    updateWeather(weather) {
        this.weather = weather;
    }

    renderTruck(length, width, type, interval) {
        const truckDiv = document.createElement('div');
        truckDiv.classList.add('truck');

        const shapeContainer = document.createElement('div');
        shapeContainer.classList.add('truckContainer');
        shapeContainer.style.height = `${length * 1.3}rem`;
        shapeContainer.style.width = `${width * 1.3}rem`;
        truckDiv.append(shapeContainer);

        const truckAssemblylines = document.querySelectorAll('.truck-assemblyline');

        const trucks = document.querySelectorAll('.truck');

        truckAssemblylines[trucks.length].append(truckDiv);

        // Add a button for sending the truck away
        const button = document.createElement('button');
        button.textContent = 'Send Truck';
        button.addEventListener('click', () => {
            this.sendTruck(truckDiv, type, interval);
        });

        // Append the button to the truck element
        truckDiv.appendChild(button);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    sendTruck(truck, type, interval) {
        console.log('Sending truck')
        console.log(interval)
        console.log(this.weather)

        // Check if the truck can be sent
        if (!this.truckController.canSendTruck(type, this.weather)) {
            return;
        }
    
        // Remove any existing animation classes
        truck.classList.remove('send-away', 'come-back');
    
        // Apply the 'send-away' CSS class to animate the truck going away
        truck.classList.add('send-away');

        // Define the animationiteration event handler
        const onAnimationEnd = async () => {
            console.log('hello 1')

            let truckContainer = truck.querySelector('.truckContainer')
            let children = truckContainer.querySelectorAll('.shape');
            for (let i = 0; i < children.length; i++) {
                console.log(children[i]);
                truckContainer.removeChild(children[i]);
            }
          
            await this.delay(interval * 1000);

            truck.classList.remove('send-away');
            truck.classList.add('come-back');
            console.log('hello 2')
        };

        // Add the animationiteration event listener
        truck.addEventListener('animationend', onAnimationEnd);
    }

    setController(controller) {
        this.truckController = controller;
    }
}