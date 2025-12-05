async function loadWeather() {
    const statusEl = document.getElementById("status");
    const forecastBody = document.querySelector("#forecast-table tbody");
    try {
        const res = await fetch("http://127.0.0.1:8010/weather");
        if (!res.ok) {
            throw new Error("Failed to fetch /weather");
        }
        const data = await res.json();
        console.log("Weather data:", data);  // For debugging

        statusEl.innerHTML = "<p>Last updated: just now</p>";

        // Snow summary from DAILY block
        const daily = data.daily;
        const dailyTime = daily.time;
        const dailySnow = daily.snowfall_sum;
        const dailyRain = daily.rain_sum;
        const dailyTmin = daily.temperature_2m_min;
        const dailyTmax = daily.temperature_2m_max;

        // Fill forecast table (7 days) 
        forecastBody.innerHTML = "";
        for (let i = 0; i < dailyTime.length; i++) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${dailyTime[i]}</td>
                <td>${dailyTmin[i]}</td>
                <td>${dailyTmax[i]}</td>
                <td>${dailySnow[i]}</td>
                <td>${dailyRain[i]}</td>
            `;
            forecastBody.appendChild(row);
        }
    } catch (err) {
        console.error(err);
        statusEl.innerHTML = `<p style="color:red;">Failed to load weather data.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", loadWeather);