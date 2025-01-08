import axios from "axios";

const apiKey = "c092409e7122a0be3ac767d120eae5cd"; // Replace with your API key

export const fetchWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};
;
