class AssemblyLineController {
    constructor(assemblyLineView, loadhallManager, shapeFactory) {
        this.assemblyLineView = assemblyLineView;
        this.loadhallmanager = loadhallManager;
        this.shapeFactory = shapeFactory;
        setInterval(this.generateTetrominos.bind(this), 2000);
    }

    bindListeners() {
        const assemblyLineButton = document.querySelector('#assembly-line-button');
        assemblyLineButton.addEventListener('click', () => this.createAssemblyLine());

        const createShapeButton = document.querySelector('#create-shape-button');
        createShapeButton.addEventListener('click', () => this.generateShape())
    }

    createAssemblyLine() {
        const assemblyLine = new AssemblyLine();
        this.loadhallmanager.getCurrentLoadhall().addAssemblyLine(assemblyLine);
        this.assemblyLineView.renderNewAssemblyLine();
    }
    displayShape(shape, assemblyLine) {
        this.assemblyLineView.renderShape(shape.coords, shape.color, assemblyLine);
    }

    generateShape(assemblyLine) {
        const shape = this.shapeFactory.createShape()
        this.displayShape(shape, assemblyLine);
    }

    generateTetrominos() {
        const assemblyLineNodes = document.querySelectorAll('.assemblyLine');
        const currentLoadhall = this.loadhallmanager.getCurrentLoadhall();
        for(let i = 0; i < currentLoadhall.assemblyLines.length; i++) {
            if(currentLoadhall.assemblyLines[i].addTetromino()) {
                this.generateShape(assemblyLineNodes[i]);
            }
        }
    }
}