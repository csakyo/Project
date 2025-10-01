import { NextResponse } from 'next/server';

type CacheEntry = {
  data: any;
  timestamp: number;
};

const cache: Record<string, CacheEntry> = {}; // 都市ごとのキャッシュ
const CACHE_TTL = 60 * 1000; // 1分間キャッシュ

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city') || 'Tokyo';
  const apiKey = process.env.OPENWEATHER_API_KEY;

  // もしキャッシュがあり、有効期限内ならそれを返す
  if (cache[city] && Date.now() - cache[city].timestamp < CACHE_TTL) {
    return NextResponse.json({
      data: cache[city].data,
      cached: true,
    });
  }

  // 外部APIを呼ぶ
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await res.json();

  // キャッシュに保存
  cache[city] = {
    data,
    timestamp: Date.now(),
  };

  return NextResponse.json({
    data,
    cached: false,
  });
}
