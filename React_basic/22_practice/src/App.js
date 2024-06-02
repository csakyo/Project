import Weather from './components/Weather';

function App() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Weather city_name='Paris' color_name='blue' />
      <Weather city_name='Los Angeles' color_name='red' />
    </div>
  );
}

export default App;
