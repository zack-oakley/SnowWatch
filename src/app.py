# Zack Oakley
# 12/3/2025
# Flask API to retrieve weather data from Open-Meteo
from flask import Flask, jsonify
from src.fetch_weather import fetch_mountain_weather

app = Flask(__name__)

@app.get("/weather")
def get_weather():
    try:
        data = fetch_mountain_weather()
        return jsonify(data), 200
    except Exception:
        return jsonify({"error": "Failed to fetch weather data"}), 502

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8010, debug=True)