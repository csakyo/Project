import WeatherForm from './components/WeatherForm';

export default async function Home() {
  const API_KEY = process.env.OPENWEATHER_API_KEY!;
  const defaultCity = 'Tokyo';

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${API_KEY}`,
    { cache: 'no-store' } // SSRで毎回最新データを取得
  );
  const initialWeather = await res.json();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🌤 天気ダッシュボード</h1>
      <WeatherForm initialWeather={initialWeather} />
    </main>
  );
}
