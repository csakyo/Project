'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className='relative min-h-screen overflow-hidden'>
      {/* AnimatePresenceで天気変更時にフェード */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={bgImage}
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${bgImage})` }}
          // フェードイン・アウト
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backgroundPositionX: ['0%', '100%'], // 背景がゆっくり横に動く
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1 },
            backgroundPositionX: {
              duration: 60, // ゆっくり60秒かけて動く
              ease: 'linear',
              repeat: Infinity, // 永久ループ
              repeatType: 'mirror', // 往復する動き
            },
          }}
        />
      </AnimatePresence>

      {/* 内容 */}
      <div className='relative z-10 p-6'>
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
          <p>気温: {Math.round(weather?.main?.temp)}°C</p>
          <p>天気: {weather?.weather?.[0]?.description}</p>
        </div>
      </div>
    </div>
  );
}
