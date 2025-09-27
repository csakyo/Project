import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city') || 'Tokyo';
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY!;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await res.json();

    if (data.cod !== 200) {
      return NextResponse.json(
        { error: '都市が見つかりません' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'APIエラーが発生しました' },
      { status: 500 }
    );
  }
}
