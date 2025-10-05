'use client';

import { useState } from 'react';

type WeatherData = {
  main: { temp: number };
  weather: { description: string; main: string }[];
  name: string;
};

export default function WeatherForm({
  initialWeather,
}: {
  initialWeather: WeatherData;
}) {
  const [weather, setWeather] = useState<WeatherData>(initialWeather);
  const [city, setCity] = useState('');

  const fetchWeather = async () => {
    if (!city) return;
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();
    setWeather(data.data);
  };

  // 天気で背景を変える
  const weatherMain = weather?.weather?.[0]?.main?.toLowerCase();
  let bgImage = '/default.jpg';

  if (weatherMain === 'clear') {
    bgImage = '/sunny.png';
  } else if (weatherMain === 'clouds') {
    bgImage = '/cloudy.png';
  } else if (weatherMain === 'rain') {
    bgImage = '/rainy.png';
  }

  return (
    <div
      className='min-h-screen bg-cover bg-center p-6'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='bg-white bg-opacity-70 p-4 rounded-lg max-w-md mx-auto'>
        <div className='mb-4'>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='都市名を入力 (例: Tokyo)'
            className='border p-2 mr-2'
          />
          <button
            onClick={fetchWeather}
            className='bg-blue-500 text-white px-3 py-2 rounded'
          >
            検索 🔎
          </button>
        </div>

        <p>都市: {weather?.name}</p>
        <p>気温: {Math.round(weather?.main?.temp - 273.15)}°C</p>
        <p>天気: {weather?.weather?.[0]?.description}</p>
      </div>
    </div>
  );
}
