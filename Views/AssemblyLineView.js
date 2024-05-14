class AssemblyLineView {
    constructor() {
        this.activePiece = null // Store currently active piece
        this.startDrag = this.startDrag.bind(this); // Bind the context of `this` to the methods
        this.dragPiece = this.dragPiece.bind(this);
        this.endDrag = this.endDrag.bind(this);
    }

    renderNewAssemblyLine() {
        const assemblyLine = document.createElement('div');
        assemblyLine.classList.add('assemblyLine');

        const shapeContainer = document.createElement('div');
        shapeContainer.classList.add('shapeContainer')
        shapeContainer.classList.add('assemblyLineGrid');
        assemblyLine.append(shapeContainer);

        const truckAssemblyline = document.createElement('div');
        truckAssemblyline.classList.add('truck-assemblyline');
        truckAssemblyline.append(assemblyLine);

        const truckAssemblyLineContainer = document.querySelector('#truck-assembly-line-container');
        truckAssemblyLineContainer.append(truckAssemblyline);
    }

    renderShape(coords, color, assemblyLine) {
        const shapeContainer = assemblyLine.querySelector('.shapeContainer');
        const shape = document.createElement('div');
        shape.classList.add('shape');
        const amount = shapeContainer.children.length;
        for(let i = 0; i < coords.length; i++){
            const coord = coords[i];
            const block = document.createElement('div');
            block.classList.add('shapeBlock');
            block.style.backgroundColor = color;
            block.style.gridRow = coord[1] + (amount * 1.4);
            block.style.gridColumn = coord[0];
            shape.append(block);
        }
        shape.addEventListener('mousedown', this.startDrag)
        document.addEventListener('mouseup', this.endDrag);
        shapeContainer.append(shape);
    }

    startDrag(event) {
        event.stopPropagation(); // Prevent event bubbling
        console.log("StartDrag");
        this.dragStartX = event.clientX;
        this.dragStartY = event.clientY;

        document.addEventListener('mousemove', this.dragPiece);
    }


    dragPiece(event) {
        event.stopPropagation();
        const tetrisPiece = event.target.parentElement;
        const newX = event.clientX - this.dragStartX;
        const newY = event.clientY - this.dragStartY;

        tetrisPiece.style.left = `${newX}px`;
        tetrisPiece.style.top = `${newY}px`;

        // Prevent text selection during dragging
        event.preventDefault();
    }


    endDrag() {
        console.log("endDrag");
        document.removeEventListener('mousemove', this.dragPiece);
    }

}