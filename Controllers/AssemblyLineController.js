class AssemblyLineController {
    constructor(assemblyLineView, loadhallManager, shapeFactory) {
        this.assemblyLineView = assemblyLineView;
        this.loadhallmanager = loadhallManager;
        this.shapeFactory = shapeFactory;
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

    generateShape() {
        const shape = this.shapeFactory.createShape()
        this.displayShape(shape);
    }

    displayShape(shape) {
        this.assemblyLineView.renderShape(shape.coords, shape.color);
    }
}