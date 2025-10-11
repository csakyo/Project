'use client';

import { useState, useEffect } from 'react';

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
  const [city, setCity] = useState(''); // 選択された都市名

  const cities = ['Tokyo', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka'];

  // 都市が選択されたら即時天気取得
  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();
      setWeather(data.data);
    };

    fetchWeather();
  }, [city]);

  // 背景画像切り替え
  const weatherMain = weather?.weather?.[0]?.main?.toLowerCase();
  let bgImage = '/default.jpg';

  if (weatherMain === 'clear') bgImage = '/sunny.png';
  else if (weatherMain === 'clouds') bgImage = '/cloudy.png';
  else if (weatherMain === 'rain') bgImage = '/rainy.png';

  return (
    <div
      className='min-h-screen bg-cover bg-center p-6 transition-all duration-500'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='bg-white bg-opacity-70 p-4 rounded-lg max-w-md mx-auto'>
        <div className='mb-4 flex items-center space-x-2'>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='border p-2 rounded w-full'
          >
            <option value=''>都市を選択してください</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <p>都市: {weather?.name}</p>
        <p>気温: {Math.round(weather?.main?.temp - 273.15)}°C</p>
        <p>天気: {weather?.weather?.[0]?.description}</p>
      </div>
    </div>
  );
}
