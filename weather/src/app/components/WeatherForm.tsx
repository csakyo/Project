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

  // 背景を天気で切り替え
  const weatherMain = weather?.weather?.[0]?.main?.toLowerCase();
  let bgImage = '/default.jpg';

  if (weatherMain === 'clear') bgImage = '/sunny.png';
  else if (weatherMain === 'clouds') bgImage = '/cloudy.png';
  else if (weatherMain === 'rain') bgImage = '/rainy.png';

  // 候補リスト
  const cities = ['Tokyo', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka'];

  return (
    <div
      className='min-h-screen bg-cover bg-center p-6'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='bg-white bg-opacity-70 p-4 rounded-lg max-w-md mx-auto'>
        <div className='mb-4 flex items-center space-x-2'>
          {/* 自由入力＋候補付き */}
          <input
            type='text'
            list='city-list'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='都市名を入力または選択'
            className='border p-2 rounded w-full'
          />
          <datalist id='city-list'>
            {cities.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>

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
