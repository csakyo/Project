import { NextResponse } from 'next/server';

type CacheEntry = {
  data: any;
  timestamp: number;
};

const cache: Record<string, CacheEntry> = {};
const CACHE_TTL = 60 * 1000; // 1分間

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city') || 'Tokyo';
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key is not set' },
      { status: 500 }
    );
  }

  // キャッシュが有効ならそれを返す
  if (cache[city] && Date.now() - cache[city].timestamp < CACHE_TTL) {
    return NextResponse.json({
      data: cache[city].data,
      cached: true,
    });
  }

  // 外部API呼び出し
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=ja`
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: `Failed to fetch weather data for ${city}` },
      { status: res.status }
    );
  }

  const data = await res.json();

  // キャッシュ保存
  cache[city] = {
    data,
    timestamp: Date.now(),
  };

  return NextResponse.json({
    data,
    cached: false,
  });
}