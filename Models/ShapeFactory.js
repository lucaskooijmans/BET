class ShapeFactory {
    constructor() {
        this.shapes = ['straight', 'square', 'T', 'L', 'skew'];
        this.colors = ['#00ff44', '#ff8800', '#ff00c3', '#ffff00', '#0af1f5'];
    }

    createShape() {
        let shape = this.shapes[Math.random() * this.shapes.length];
        let color = this.colors[Math.random() * this.colors.length];
        let coords = [];
        switch(shape) {
            case 'straight':
                coords = [[0, 0], [0, 1], [0, 2], [0, 3]];
                break;
            case 'square':
                coords = [[0,0], [0,1], [1,0], [1,0]];
                break;
            case 'T':
                coords = [[0,0], [0,1], [0,2], [1,1], [2,1]];
                break;
            case 'L':
                coords = [[0,0], [1,0], [2,0], [2,1], [2,2]];
                break;
            case 'skew':
                coords = [[0,0], [0,1], [1,1], [1,2]]
                break;
        }
        return new Shape(coords, color);
    }
}