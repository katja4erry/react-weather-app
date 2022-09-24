import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Odesa</h1>
      <ul>
        <li>Saturday 17:00</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="icon weather"
              ></img>
            </div>
            <div className="col-8 ps-0">
              <span className="temperature">15</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 47%</li>
            <li>Wind: 7 m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
