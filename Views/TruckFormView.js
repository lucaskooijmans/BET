class TruckFormView {
    constructor() {
        this.interval = 1;
    }

    renderTruck(length, width) {
        const truckDiv = document.createElement('div');
        // const truckContainer = document.querySelector('#truck-assembly-line-container');
        truckDiv.classList.add('truck');

        const truckAssemblylines = document.querySelectorAll('.truck-assemblyline');

        const trucks = document.querySelectorAll('.truck');

        for (let i = 0; i < length; i++)
        {
            let row = document.createElement('div');
            row.classList.add('block');
            row.classList.add('row');
            row.classList.add('row-border');
            for(let j = 0; j < width; j++)
            {
                let block = document.createElement('div');
                block.classList.add('block');
                row.append(block);
            }
            truckDiv.append(row)
        }

        truckAssemblylines[trucks.length].append(truckDiv);

        // Add a button for sending the truck away
        const button = document.createElement('button');
        button.textContent = 'Send Truck';
        button.addEventListener('click', () => {
            this.sendTruck(truckDiv);
        });

        // Append the button to the truck element
        truckDiv.appendChild(button);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    sendTruck(truck) {
        

        console.log('Sending truck');
        console.log(this.interval)
    
        // Remove any existing animation classes
        truck.classList.remove('send-away', 'come-back');
    
        // Apply the 'send-away' CSS class to animate the truck going away
        truck.classList.add('send-away');

        // Define the animationiteration event handler
        const onAnimationEnd = async () => {
            console.log('hello 1')
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
}