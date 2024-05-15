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

    sendTruck(truck) {
        console.log('Sending truck');
        console.log(this.interval)
    
        // Remove any existing animation classes
        truck.classList.remove('send-away', 'come-back');
    
        // Define the animationend event handler
        const onAnimationEnd = (event) => {
            if (event.animationName === 'send-away') {
                truck.classList.remove('send-away');
                setTimeout(() => {
                    truck.classList.add('come-back');
                }, this.interval);
            } else if (event.animationName === 'come-back') {
                truck.classList.remove('come-back');
                // Remove the event listener after the come-back animation ends
                truck.removeEventListener('animationend', onAnimationEnd);
            }
        };
    
        // Remove the existing animationend event listener
        truck.removeEventListener('animationend', onAnimationEnd);
    
        // Add the animationend event listener
        truck.addEventListener('animationend', onAnimationEnd);
    
        // Apply the 'send-away' CSS class to animate the truck going away
        truck.classList.add('send-away');
    }

    setInterval(interval) {
        this.interval = interval;
    }
}