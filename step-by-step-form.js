const tabs = document.querySelectorAll('.tab');
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');
const submitButton = document.querySelector('#submit-button');
const truckForm = document.querySelector('#truck-form');
const lengthInput = truckForm.querySelector('#length');
const widthInput = truckForm.querySelector('#width');
const intervalInput = truckForm.querySelector('#interval');
const typesSelect = truckForm.querySelector('#types');
let currentTab = 0;
let trucks = [];

function switchTab(){
    const tabToHide = tabs[currentTab];
    let tabToShow = tabs[currentTab];
    if(this.id === 'previous-button' && currentTab > 0)
    {
        tabToShow = tabs[currentTab - 1];
        currentTab--;
    }
    else if(this.id === 'next-button' && currentTab < tabs.length - 1)
    {
        if(tabs[currentTab].children[1].value)
        {
            tabToShow = tabs[currentTab + 1];
            currentTab++;
        }
        else{
            window.alert("Please fill in a value!");
        }
    }
    else
    {
        tabToShow = tabs[0];
        currentTab = 0;
    }
    tabToHide.classList.add('hidden');
    tabToShow.classList.remove('hidden');

    function hideOrShowButtons()
    {
        if(currentTab + 1 === tabs.length)
        {
            nextButton.classList.add('hidden');
            submitButton.classList.remove('hidden');
        }
        else if(currentTab === 0)
        {
            previousButton.classList.add('hidden');
            nextButton.classList.remove('hidden');
            submitButton.classList.add('hidden');
        }
        else{
            if(nextButton.classList.contains('hidden'))
            {
                nextButton.classList.remove('hidden');
            }
            if(previousButton.classList.contains('hidden'))
            {
                previousButton.classList.remove('hidden');
            }
            if(!submitButton.classList.contains('hidden'))
            {
                submitButton.classList.add('hidden');
            }
        }
    }
    hideOrShowButtons();
}
nextButton.addEventListener('click', switchTab);
previousButton.addEventListener('click', switchTab);
truckForm.onsubmit = function() {
    const truck = {
        length: lengthInput,
        width: widthInput,
        interval: intervalInput,
        type: typesSelect,
    }
    trucks.push(truck);

    switchTab();
}

