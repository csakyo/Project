import { useEffect, useState } from 'react';
import { ENDPOINT, KEY } from '../constants';

function Weather() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${ENDPOINT}/weather/?q=Tokyo&APPID=${KEY}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  }, []);

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
          <div className='w-1/2 text-center'>画像</div>
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
              2021-03-16
            </p>
          </div>
          <div className='w-1/3'>
            <p className='font-light text-xs'>Temprature</p>
            <p className='text-lg font-medium tracking-widest text-sm'>20℃</p>
          </div>
          <div className='w-1/3'>
            <p className='font-light text-xs'>Humidity</p>
            <p className='text-lg font-medium tracking-widest text-sm'>40%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
