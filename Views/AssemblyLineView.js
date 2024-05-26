class AssemblyLineView {

    constructor() {
        this.startDrag = this.startDrag.bind(this); // Bind the context of `this` to the methods
        this.dragPiece = this.dragPiece.bind(this);
        this.endDrag = this.endDrag.bind(this);
        this.activePieceX = 0;
        this.activePieceY = 0;
        this.placedX = 0;
        this.placedY = 0;
        this.cellSize = 15;
        this.activePiece = null;
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
        shapeContainer.prepend(shape);
    }

    startDrag(event) {
        this.activePiece = event.target.parentElement;
        this.activePiece.classList.add('dragging');
        this.activePieceX = this.activePiece.style.top;
        this.activePieceY = this.activePiece.style.left;
        event.stopPropagation(); // Prevent event bubbling
        this.dragStartX = event.clientX;
        this.dragStartY = event.clientY;

        document.addEventListener('mousemove', this.dragPiece);
    }

    dragPiece(event) {
        event.stopPropagation();
        const tetrisPiece = this.activePiece;

        const newX = event.clientX - this.dragStartX;
        const newY = event.clientY - this.dragStartY;

        const snappedX = newX;
        const snappedY = newY;

        tetrisPiece.style.left = `${snappedX}px`;
        tetrisPiece.style.top = `${snappedY}px`;

        // Prevent text selection during dragging
        event.preventDefault();
    }

    endDrag(event) {
        this.activePiece.classList.remove('dragging');
        this.placedX = this.activePiece.getBoundingClientRect().x;
        this.placedY = this.activePiece.getBoundingClientRect().y;
        document.removeEventListener('mousemove', this.dragPiece);
            const shapes = document.querySelectorAll('.shape');
            const shapesArray = Array.from(shapes);
            shapesArray.splice(shapesArray.indexOf(this.activePiece), 1);
            const currentShapeBlocks = this.activePiece.querySelectorAll('.shapeBlock');

            let collision = false;
            for (let i = 0; i < currentShapeBlocks.length; i++) {
                const block1 = currentShapeBlocks[i].getBoundingClientRect();
                for (let j = 0; j < shapesArray.length; j++) {
                    for (let x = 0; x < shapesArray[j].children.length; x++){
                        const block2 = shapesArray[j].children[x].getBoundingClientRect();
                        if (block1.x + block1.width >= block2.x &&
                            block1.x <= block2.x + block2.width &&
                            block1.y + block1.height >= block2.y &&
                            block1.y <= block2.y + block2.height) {
                            console.log("Collision detected!");
                            collision = true;
                        }
                    }
                }
            }
            this.activePiece.style.display = 'none';
            const dropTarget = document.elementFromPoint(event.clientX, event.clientY);
            this.activePiece.style.display = 'inline-grid';
            let truck = this.activePiece.parentElement.parentElement.parentElement.querySelector('truck');
            if(!truck){
                this.activePiece.style.left = this.activePieceX;
                this.activePiece.style.top = this.activePieceY;
            }
            if(collision || dropTarget !== this.activePiece.parentElement.parentElement.parentElement.querySelector('.truck').querySelector('.truckContainer')){
                console.log(dropTarget);
                console.log(this.activePiece.parentElement.parentElement.parentElement.querySelector('.truck').querySelector('.truckContainer'));
                this.activePiece.style.left = this.activePieceX;
                this.activePiece.style.top = this.activePieceY;
            }
            else{
                let piece = this.activePiece;
                const truckShapeContainer = this.activePiece.parentElement.parentElement.parentElement.querySelector('.truck').querySelector('.truckContainer');
                this.activePiece.parentElement.removeChild(this.activePiece);
                truckShapeContainer.append(piece);
            }

    }

    addEventListeners() {
        console.log('added back the eventlisteners when switching loadhalls');

        const shapes = document.querySelectorAll('.shape');
        shapes.forEach(shape => {
            shape.addEventListener('mousedown', this.startDrag);
            document.addEventListener('mouseup', this.endDrag);
        });
        document.addEventListener('mousemove', this.dragPiece);
    }
}