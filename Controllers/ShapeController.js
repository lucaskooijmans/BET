class ShapeController {
    constructor(shapeView, shapeFactory, loadhallManager) {
        this.shapeView = shapeView;
        this.shapeFactory = shapeFactory;
        this.loadhallManager = loadhallManager;
    }

    startGenerating() {
        setInterval(this.generateTetromino, 3000);
    }

    generateTetromino() {
        const tetromino = this.shapeFactory.createShape();
        for(let i = 0; i < this.loadhallManager.getCurrentLoadhall().assemblyLines.length; i++) {
            this.loadhallManager.getCurrentLoadhall().assemblyLines[i].addTetromino(tetromino);
        }
    }
}