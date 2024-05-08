class AssemblyLineView {
    constructor() {
    }

    renderNewAssemblyLine() {
        const assemblyLine = document.createElement('div');
        assemblyLine.classList.add('assemblyLine');

        const shapeContainer = document.createElement('div');
        shapeContainer.classList.add('shapeContainer')
        shapeContainer.classList.add('grid');
        assemblyLine.append(shapeContainer);

        const assemblyLineContainer = document.querySelector('#assembly-line-container');
        assemblyLineContainer.append(assemblyLine);
    }

    renderShape(coords, color, assemblyLine) {
        const shapeContainer = assemblyLine.querySelector('.shapeContainer');
        const amount = shapeContainer.children.length;
        for(let i = 0; i < coords.length; i++){
            const coord = coords[i];
            const block = document.createElement('div');
            block.classList.add('shapeBlock');
            block.style.backgroundColor = color;
            block.style.gridRow = coord[1] + (amount * 1.4);
            block.style.gridColumn = coord[0];
            shapeContainer.append(block);
            console.log("Added shape");
        }
    }
}