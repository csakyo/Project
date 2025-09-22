'use client';

import { useState } from 'react';

type WeatherData = {
  main: { temp: number };
  weather: { description: string }[];
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
    setWeather(data);
  };

  return (
    <div>
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
  );
}
