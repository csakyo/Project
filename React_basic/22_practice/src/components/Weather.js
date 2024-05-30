import { useEffect, useState } from 'react';
import { ENDPOINT, KEY, IMG } from '../constants';
import dayjs from 'dayjs';

function Weather() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${ENDPOINT}/weather/?q=Tokyo&APPID=${KEY}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
        console.log(result);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <svg
          className='animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className='p-4'>
      <div
        className='p-4 bg-gradient-to-r from-blue-500 to-blue-300
                w-96 m-auto rounded-xl shadow-2xl 
                transform hover:scale-110 transition-transform
                text-white'
      >
        <div className='flex my-3'>
          <div className='w-1/2'>
            <p className='font-light'>City Name</p>
            <p className='text-lg font-medium tracking-widest'>{data.name}</p>
          </div>
          <div className='w-1/2 text-center'>
            <img src={`${IMG}/${data.weather[0].icon}.png`} />
          </div>
        </div>
        <div className='flex my-3'>
          <div className='w-1/2'>
            <p className='font-light'>Weather Condition</p>
            <p className='text-lg font-medium tracking-widest'>
              {data.weather[0].main}
            </p>
          </div>
        </div>
        <div className='flex my-3'>
          <div className='w-1/3'>
            <p className='font-light text-xs'>Date</p>
            <p className='text-lg font-medium tracking-widest text-sm'>
              {dayjs(data.ts).format('YYYY-MM-DD')}
            </p>
          </div>
          <div className='w-1/3'>
            <p className='font-light text-xs'>Temprature</p>
            <p className='text-lg font-medium tracking-widest text-sm'>
              {data.main.temp}℃
            </p>
          </div>
          <div className='w-1/3'>
            <p className='font-light text-xs'>Humidity</p>
            <p className='text-lg font-medium tracking-widest text-sm'>
              {data.main.humidity}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
