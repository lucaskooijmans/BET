class AssemblyLineView {
    constructor() {
    }

    renderNewAssemblyLine() {
        const assemblyLine = document.createElement('div');
        assemblyLine.classList.add('assemblyLine');
        const assemblyLineContainer = document.querySelector('#assembly-line-container');
        assemblyLineContainer.append(assemblyLine);
    }
}