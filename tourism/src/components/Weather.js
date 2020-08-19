import React, { useState } from "react";
import axios from "axios";

export default function Weather({ places }) {
  const [temp, setTemp] = useState({
    currentTemp: "",
    weatherType: "",
    maxTemp: "",
    minTemp: "",

    show: false,
  });
  const { currentTemp, weatherType, maxTemp, minTemp, show } = temp;
  const handleSubmit = () => {
    axios
      .get(`/weather/place/${places}`)
      .then((res) => {
        console.log(res.data);
        const temperature = res.data;
        const currTemp = (temperature.main.temp-273.15).toFixed(2);
        const maxtemp = temperature.main.pressure
        const mintemp = temperature.main.humidity;
        const desc = temperature.weather[0].description;
        setTemp({
          ...temp,
          currentTemp: currTemp,
          show: !show,
          maxTemp: maxtemp,
          minTemp: mintemp,
          weatherType: desc,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card">
      <div className="card-body" >
        <button className="btn  mb-2" style={{backgroundColor:"#3c2946", color:"white",fontWeight:"500"}} onClick={handleSubmit}>
         Know Current Weather
        </button>
        {show && (
          <div className="text-left" style={{color:"#3c2946", fontWeight:"700"}}>
            <p>Temp: <strong>{currentTemp}°C</strong> </p>
            <p> Pressure :<strong>{maxTemp} hPa</strong> </p>
            <p> Humidity : <strong>{minTemp}%</strong></p>
            <p> Weather Type : <strong>{weatherType}</strong>  </p>
          </div>
        )}
      </div>
    </div>
  );
}
