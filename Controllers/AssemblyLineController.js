class AssemblyLineController {
    constructor(assemblyLineView, assemblyLineManager) {
        this.assemblyLineView = assemblyLineView;
        this.assemblyLineManager = assemblyLineManager;
    }

    bindListeners() {
        const assemblyLineButton = document.querySelector('#assembly-line-button');
        assemblyLineButton.addEventListener('click', () => this.createAssemblyLine());
    }

    createAssemblyLine() {
        const assemblyLine = new AssemblyLine();
        this.assemblyLineManager.add(assemblyLine);

        this.assemblyLineView.renderNewAssemblyLine();
    }
}