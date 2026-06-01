function convertTemperature(){

    let temperature = document.getElementById("temperature").value;

    let unit = document.getElementById("unit").value;

    let result = document.getElementById("result");

    if(temperature === ""){
        result.innerHTML = "Please enter a temperature";
        return;
    }

    temperature = Number(temperature);

    if(unit === "celsius"){

        let fahrenheit = (temperature * 9/5) + 32;

        result.innerHTML =
        temperature + "°C = " + fahrenheit.toFixed(2) + "°F";

    }
    else{

        let celsius = (temperature - 32) * 5/9;

        result.innerHTML =
        temperature + "°F = " + celsius.toFixed(2) + "°C";
    }
}