import React, { useEffect } from "react";


const Map = (props) => {
    const weatherResult = props.weatherResult[0];
    const accessToken = process.env.REACT_APP_ACCESS;
    const apiKey = process.env.REACT_APP_API;

    useEffect(() => {
        window.document.getElementById("map").innerHTML = '<div id="mapid"  style="height:360px" ></div>'
        let mapbox = window.L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 5,
            id: 'mapbox/streets-v11',
            accessToken: accessToken
        })

        let tileT = window.L.tileLayer("https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={api_key}", {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 5,
            layer: "temp_new",
            api_key: apiKey
        })
        let tileP = window.L.tileLayer("https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={api_key}", {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 5,
            layer: "pressure_new",
            api_key: apiKey
        })
        let tileH = window.L.tileLayer("https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={api_key}", {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 5,
            layer: "precipitation_new",
            api_key: apiKey
        })
        let map = window.L.map('mapid', {
            center: [weatherResult.coord.lat, weatherResult.coord.lon],
            zoom: 1,
            layers: [mapbox, tileT]
        });
        const baseLayer = {
            "Temp": tileT,
            "Pressure": tileP,
            "Humidity": tileH,
        }
        window.L.control.layers(baseLayer).addTo(map)
        const marker = window.L.marker([weatherResult.coord.lat, weatherResult.coord.lon]);
        marker.bindPopup(`<div style="text-align:center"><b>${weatherResult.name}</b><br><span>${new Date(weatherResult.dt * 1000).toLocaleDateString()}</span></div> <div><b>Tempreture</b>: ${weatherResult.main.temp}&deg;C</div> <div><b>Pressure</b>: ${weatherResult.main.pressure}hPa</div> <div><b>Humidity</b>: ${weatherResult.main.humidity}%</div>`).openPopup().addTo(map)
    }, [weatherResult, accessToken, apiKey])

    return (
        <div id="map">
            <div id="mapid" style={{ width: "100%", height: "360px" }} ></div>
        </div>

    )
}

export default Map;