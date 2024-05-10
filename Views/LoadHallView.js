class LoadHallView {
    constructor() {
        
    }

    renderLoadHall(loadHall) {
        const loadHallContainer = document.querySelector('#loadhall-container');
        loadHallContainer.innerHTML = ''; // Clear the container
    
        // Recreate the truck-assembly-line-container element
        const truckAssemblyLineContainer = document.createElement('div');
        truckAssemblyLineContainer.id = 'truck-assembly-line-container';
        loadHallContainer.appendChild(truckAssemblyLineContainer);
    }
}