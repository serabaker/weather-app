import React, { useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";
import { fetchWeather } from "../services/fetchWeather";
import Input from "@mui/icons-material/Input";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/Navbar.css";
import { fetchPhotos } from "../services/fetchPhotos";

function Navbar({ getData, getImage, defaultData }) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [image, setImage] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const WeatherData = await fetchWeather(query);
      const ImageLocation = await fetchPhotos(query);
      setImage(ImageLocation.results);
      setWeather(WeatherData);
      setQuery("");
    }
  };

  const clickText = async (query) => {
    const WeatherData = await fetchWeather(query);
    const ImageLocation = await fetchPhotos(query);
    setImage(ImageLocation.results);
    setWeather(WeatherData);
    setQuery("");
  };

  useEffect(() => {
    getImage(image);
    getData(weather);
  }, [getData, getImage, image, weather]);

  return (
    <div className="weather__navbar">
      <div className="weather__input__container">
        <Input
          className="navbar__input"
          placeholder="Another Location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        <SearchIcon className="navbar__searchIcon" />
      </div>
      <div className="navbar__cities__container">
        <div className="cities">
          <h3 onClick={(e) => clickText(e.target.textContent)}>Istanbul</h3>
          <h3 onClick={(e) => clickText(e.target.textContent)}>London</h3>
          <h3 onClick={(e) => clickText(e.target.textContent)}>New York</h3>
          <h3 onClick={(e) => clickText(e.target.textContent)}>Los Angeles</h3>
          <h3 onClick={(e) => clickText(e.target.textContent)}>Oklahoma</h3>
        </div>
        <div className="arrange__cities"></div>
      </div>
      <WeatherDetails weather={weather} defaultData={defaultData} />
    </div>
  );
}

export default Navbar;
