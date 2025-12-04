# Zack Oakley
# 12/3/2025
# Retrieves weather data from Open-Meteo for Crystal Mountain
import requests

WEATHER_URL = (
    "https://api.open-meteo.com/v1/forecast?latitude=46.935327&longitude=-121.47448"
    "&daily=temperature_2m_max,temperature_2m_min,snowfall_sum,rain_sum"
    "&hourly=temperature_2m,snowfall,rain,wind_speed_10m,snow_depth"
    "&past_days=2"
    "&forecast_days=7"
    "&wind_speed_unit=mph"
    "&temperature_unit=fahrenheit"
    "&precipitation_unit=inch"
)

def fetch_mountain_weather():
    response = requests.get(WEATHER_URL, timeout=10)
    response.raise_for_status()
    return response.json()


