function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "ac78e7e7a20b19f569846f2351df7eac";
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}&units=m`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("weather-results").innerHTML = "Cidade não encontrada!";
            } else {
                document.getElementById("weather-results").innerHTML = `
                    <h2>${data.location.name}, ${data.location.country}</h2>
                    <p>Temperatura: ${data.current.temperature}°C</p>
                    <p>Condição: ${data.current.weather_descriptions[0]}</p>
                    <img src="${data.current.weather_icons[0]}" alt="Weather Icon">
                `;
            }
        })
        .catch(error => console.error("Erro ao buscar os dados: ", error));
}
