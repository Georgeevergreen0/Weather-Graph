fea0af8803c6cdfeabedecb3f15bb233;

{
  recValue.map((loc) => (
    <div key={loc.id} style={{ backgroundColor: "white", margin: "20px 0" }}>
      <div>
        <div>logitude:{loc.coord.lon}</div>
        <div>latitude:{loc.coord.lat}</div>

        {loc.weather.map((value) => (
          <div key={value.id}>
            <div>{value.main}</div>
            <div>{value.description} <img alt="yes" src={`http://openweathermap.org/img/wn/${value.icon}@2x.png`} /></div>
          </div>
        ))}

      </div>
      <div>{loc.main.feels_like}</div>
      <div>{loc.main.temp_min}</div>
      <div>{loc.main.temp_max}</div>
      <div>{loc.main.pressure}</div>
      <div>{loc.main.humidity}</div>
      <div>{loc.wind.speed}</div>
      <div>{loc.wind.deg}</div>
      <div>{loc.visibility}</div>
      <div>{loc.clouds.all}</div>
      <div>{loc.dt}</div>
      <div>{loc.sys.message}</div>
      <div>contry: {loc.sys.country}</div>
      <div>{new Date(loc.sys.sunrise).toDateString()}</div>
      <div>{new Date(loc.sys.sunset).toDateString()}</div>
      <div>{loc.timezone}</div>
      <div>{loc.name}</div>
      <div>{loc.cod}</div>
    </div>
  ))
}

/*{
    "coord": {
      "lon": -122.08,
      "lat": 37.39
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 282.55,
      "feels_like": 281.86,
      "temp_min": 280.37,
      "temp_max": 284.26,
      "pressure": 1023,
      "humidity": 100
    },
    "visibility": 16093,
    "wind": {
      "speed": 1.5,
      "deg": 350
    },
    "clouds": {
      "all": 1
    },
    "dt": 1560350645,
    "sys": {
      "type": 1,
      "id": 5122,
      "message": 0.0139,
      "country": "US",
      "sunrise": 1560343627,
      "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
  }*/
