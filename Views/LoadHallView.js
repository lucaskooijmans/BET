class LoadHallView {
    constructor(loadHall) {
        this.loadHall = loadHall;
        this.loadHallContainer = document.querySelector('#loadhall-container');
    }

    hide() {
        this.loadHallContainer.style.visibility = 'hidden';
    }

    show() {
        this.loadHallContainer.style.visibility = 'visible';
    }
}