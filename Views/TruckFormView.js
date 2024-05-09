class TruckFormView {
    constructor() {
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
            for(let j = 0; j < width; j++)
            {
                let block = document.createElement('div');
                block.classList.add('block');
                row.append(block);
            }
            truckDiv.append(row)
        }

        truckAssemblylines[trucks.length].append(truckDiv);
    }
}