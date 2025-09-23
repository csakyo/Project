import WeatherForm from '@/app/components/WeatherForm';

export default async function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY!;
  const defaultCity = 'Tokyo';

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${API_KEY}`,
    { cache: 'no-store' } // SSRで毎回最新データ
  );
  const initialWeather = await res.json();

  return (
    <main className='p-6 font-sans'>
      <h1 className='text-2xl mb-4'>🌤 天気ダッシュボード</h1>

      <WeatherForm initialWeather={initialWeather} />
    </main>
  );
}
