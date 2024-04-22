class ShapeController {
    constructor(shapeView, shapeFactory, assemblyLineManager) {
        this.shapeView = shapeView;
        this.shapeFactory = shapeFactory;
        this.assemblyLineManager = assemblyLineManager;
        this.startGenerating();
    }

    startGenerating() {
        setInterval(this.generateTetromino, 3000);
    }

    generateTetromino() {
        const tetromino = this.shapeFactory.createShape();
        for(let i = 0; i < this.assemblyLineManager.assemblyLines.length; i++) {
            this.assemblyLineManager.assemblyLines[i].addTetromino(tetromino);
        }
    }
}