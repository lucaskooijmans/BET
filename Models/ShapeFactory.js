class ShapeFactory {
    constructor() {
        this.shapes = ['straight', 'square', 'T', 'L', 'skew'];
        this.colors = ['#00ff44', '#ff8800', '#ff00c3', '#ffff00', '#0af1f5'];
    }

    createShape() {
        let shapeIndex = Math.floor(Math.random() * this.shapes.length)
        console.log(shapeIndex);
        let shape = this.shapes[shapeIndex];
        let color = this.colors[Math.floor(Math.random() * this.colors.length)];
        let coords = [];
        switch(shape) {
            case 'straight':
                coords = [[1,1], [2,1], [3,1], [4,1]];
                break;
            case 'square':
                coords = [[1,1], [1,2], [2,1], [2,2]];
                break;
            case 'T':
                coords = [[1,1], [2,1], [3,1], [2,2]];
                break;
            case 'L':
                coords = [[1,1], [1,2], [1,3], [2,3]];
                break;
            case 'skew':
                coords = [[1,1], [1,2], [2,2], [2,3]];
                break;
        }
        return new Shape(coords, color);
    }
}