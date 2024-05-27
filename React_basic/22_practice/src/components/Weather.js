function Weather() {
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
            <p className='text-lg font-medium tracking-widest'>Tokyo</p>
          </div>
          <div className='w-1/2 text-center'>画像</div>
        </div>
        <div className='flex my-3'>
          <div className='w-1/2'>
            <p className='font-light'>Weather Condition</p>
            <p className='text-lg font-medium tracking-widest'>Cloudy</p>
          </div>
        </div>
        <div className='flex my-3'>
          <div className='w-1/3'>
            <p className='font-light text-xs'>City Name</p>
            <p className='text-lg font-medium tracking-widest text-sm'>Tokyo</p>
          </div>
          <div className='w-1/3'>
            <p className='font-light text-xs'>City Name</p>
            <p className='text-lg font-medium tracking-widest text-sm'>Tokyo</p>
          </div>
          <div className='w-1/3'>
            <p className='font-light text-xs'>City Name</p>
            <p className='text-lg font-medium tracking-widest text-sm'>Tokyo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
