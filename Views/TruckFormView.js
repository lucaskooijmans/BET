class TruckFormView {
    constructor() {
    }

    renderTruck(length, width) {
        const truckDiv = document.createElement('div');
        const truckContainer = document.querySelector('#truck-container');
        truckDiv.classList.add('truck');
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
        truckContainer.append(truckDiv);
    }
}