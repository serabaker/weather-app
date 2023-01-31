let backgroundImage = "";

const sunny = "https://bmcdn.nl/assets/weather-icons/all/clear-day.svg";

const cloudy = "https://bmcdn.nl/assets/weather-icons/all/cloudy.svg";

const partly_cloudy =
  "https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day.svg";

const rainy = "https://bmcdn.nl/assets/weather-icons/all/rain.svg";

const drizzle = "https://bmcdn.nl/assets/weather-icons/all/drizzle.svg";

const mist = "https://bmcdn.nl/assets/weather-icons/all/mist.svg";

const snowy = "https://bmcdn.nl/assets/weather-icons/all/snow.svg";

const thunder = "https://bmcdn.nl/assets/weather-icons/all/thunderstorms";

export const matchIcons = (subText) => {
  if (subText !== undefined) {
    if (subText.indexOf("Sunny") >= 0 || subText.indexOf("Clear") >= 0) {
      backgroundImage = sunny;
    } else if (subText.indexOf("Cloudy") >= 0) {
      backgroundImage = cloudy;
    } else if (
      subText.indexOf("Partly cloudy") >= 0 ||
      subText.indexOf("Overcast") >= 0
    ) {
      backgroundImage = partly_cloudy;
    } else if (subText.indexOf("Rain") >= 0 || subText.indexOf("Shower") >= 0) {
      backgroundImage = rainy;
    } else if (subText.indexOf("Mist") >= 0) {
      backgroundImage = mist;
    } else if (subText.indexOf("Drizzle") >= 0) {
      backgroundImage = drizzle;
    } else if (subText.indexOf("Snow") >= 0) {
      backgroundImage = snowy;
    } else if (subText.indexOf("Thunder") >= 0) {
      backgroundImage = thunder;
    } else {
      backgroundImage = null;
    }
  }

  return backgroundImage;
};
