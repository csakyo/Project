import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
// import { Card } from '../components/Card';
// import { fetcher } from '../utils/fetcher';

type DashboardProps = {
  currency: { USDJPY: number };
  weather: { temp: number; condition: string };
};

export default function Dashboard({ currency, weather }: DashboardProps) {
  const [usdJpy, setUsdJpy] = useState(currency.USDJPY);

  // CSRで10秒ごとに為替更新
  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await fetcher(
        'https://api.exchangerate.host/latest?base=USD'
      );
      if (data && data.rates) setUsdJpy(data.rates.JPY);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
      <Card title='USD/JPY' value={usdJpy.toFixed(2)} />
      <Card title='天気' value={`${weather.temp}°C`} change={undefined} />
      <Card title='サンプル株価' value='1234' change={+5} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // SSRで初期データ取得
  const currencyData = await fetcher(
    'https://api.exchangerate.host/latest?base=USD'
  );
  const weatherData = { temp: 25, condition: '晴れ' }; // サンプル固定値でもOK

  return {
    props: {
      currency: currencyData?.rates
        ? { USDJPY: currencyData.rates.JPY }
        : { USDJPY: 0 },
      weather: weatherData,
    },
  };
};
