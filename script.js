const CelsiusE1 = document.getElementById("Celsius");
const FahrenhiteE1 = document.getElementById("Fahrenhite");
const KelvinE1 = document.getElementById("Kelvin");

function calTemp(){
    const currentvalue = +event.target.value;

    switch(event.target.name){
        case"Celsius":
        KelvinE1.value = currentvalue + 273.15;
        FahrenhiteE1.value = currentvalue * 1.8 + 32;
        break;

        case"Fahrenhite":
        CelsiusE1.value = (currentvalue - 32) / 1.8;
        KelvinE1.value = (currentvalue - 32) / 1.8 + 273.15;
        break;
        
        case"Kelvin":
        CelsiusE1.value = currentvalue - 273.15;
        FahrenhiteE1.value = (currentvalue - 273.15) * 1.8 + 32;
        break;
        
        default:
        break;
    }
}