class TruckFormView {
    constructor() {
        this.interval = 1;
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

    renderTruck(length, width, type) {
        const truckDiv = document.createElement('div');
        // const truckContainer = document.querySelector('#truck-assembly-line-container');
        truckDiv.classList.add('truck');

        const shapeContainer = document.createElement('div');
        shapeContainer.classList.add('truckContainer');
        truckDiv.append(shapeContainer);

        const truckAssemblylines = document.querySelectorAll('.truck-assemblyline');

        const trucks = document.querySelectorAll('.truck');

        // for (let i = 0; i < length; i++)
        // {
        //     let row = document.createElement('div');
        //     row.classList.add('block');
        //     row.classList.add('row');
        //     row.classList.add('row-border');
        //     for(let j = 0; j < width; j++)
        //     {
        //         let block = document.createElement('div');
        //         block.classList.add('block');
        //         row.append(block);
        //     }
        //     truckDiv.append(row)
        // }

        truckAssemblylines[trucks.length].append(truckDiv);

        // Add a button for sending the truck away
        const button = document.createElement('button');
        button.textContent = 'Send Truck';
        button.addEventListener('click', () => {
            this.sendTruck(truckDiv, type);
        });

        // Append the button to the truck element
        truckDiv.appendChild(button);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    sendTruck(truck, type) {
        console.log('Sending truck')
        console.log(this.interval)
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
            await this.delay(this.interval * 1000);
            truck.classList.remove('send-away');
            truck.classList.add('come-back');
            console.log('hello 2')
        };

        // Add the animationiteration event listener
        truck.addEventListener('animationend', onAnimationEnd);
    }

    setInterval(interval) {
        this.interval = interval;
    }

    setController(controller) {
        this.truckController = controller;
    }
}