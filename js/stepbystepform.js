var currentStep = 0;

showStep(currentStep);

function showStep(n) {
    var tabs = document.getElementsByClassName("tab");
    tabs[n].style.display = "block";

    if (n == (tabs.length - 1)) {
        document.querySelector("#nextBtn").innerHTML = "Submit";
    } else {
        document.querySelector("#nextBtn").innerHTML = "Volgende";
    }
}

function nextStep() {
    var tabs = document.querySelector(".tab");
    if (!validateForm()) return false;
    tabs[currentStep].style.display = "none";
    currentStep++;
    if (currentStep >= tabs.length) {
        createTruck(currentHallId, 
			document.querySelector("#length").value,
			document.querySelector("#width").value,
			document.querySelector("#arrival_interval").value,
			document.querySelector("#type").value,
			document.querySelector("#radius").value
		);
        resetForm();
    }
    showStep(currentStep);
}

function validateForm() {
    var tabs, tab, i, valid = true;
    var tabs = document.querySelector(".tab");
    var tab = tabs[currentStep].querySelector("input");

    for (i = 0; i < tab.length; i++) {
        if (currentStep == 0) {
            if (tab[0].value > 6 || tab[0].value <= 0) {
                valid = false;
            }
			if (tab[1].value > 3 || tab[1].value <= 0) {
                valid = false;
            }
        }

        if (tab[i].value == "") {
            valid = false;
        }
    }
    return valid;
}

function resetForm() {
    currentStep = 0;
    document.querySelector("#length").value = null;
    document.querySelector("#width").value = null;
    document.querySelector("arrival_interval").value = null;
    document.querySelector("#type").value = "cold";
    document.querySelector("#radius").value = null;
}

function clamp(num, min, max) {
	return Math.min(Math.max(num, min), max);
}

document.querySelector("#nextBtn").addEventListener("click", nextStep);
