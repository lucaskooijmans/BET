class AssemblyLineController {
    constructor(assemblyLineView, loadhallManager) {
        this.assemblyLineView = assemblyLineView;
        this.loadhallmanager = loadhallManager;
    }

    bindListeners() {
        const assemblyLineButton = document.querySelector('#assembly-line-button');
        assemblyLineButton.addEventListener('click', () => this.createAssemblyLine());
    }

    createAssemblyLine() {
        const assemblyLine = new AssemblyLine();
        this.loadhallmanager.getCurrentLoadhall().addAssemblyLine(assemblyLine);
        this.assemblyLineView.renderNewAssemblyLine();
    }
}