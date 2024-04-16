const tabs = document.querySelectorAll('.tab');
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');
const truckForm = document.querySelector('#truck-form');
let currentTab = 0;

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
    tabToHide.classList.add('hidden');
    tabToShow.classList.remove('hidden');
    console.log(`Current tab: ${currentTab}`)

    if(currentTab + 1 === tabs.length)
    {
        nextButton.classList.add('hidden');
    }
    else{
        if(nextButton.classList.contains('hidden'))
        {
            nextButton.classList.remove('hidden');
        }
    }

    if(currentTab === 0)
    {
        previousButton.classList.add('hidden');
    }
    else {
        if(previousButton.classList.contains('hidden'))
        {
            previousButton.classList.remove('hidden');
        }
    }

}
nextButton.addEventListener('click', switchTab);
previousButton.addEventListener('click', switchTab);

