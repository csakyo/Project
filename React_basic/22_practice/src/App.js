import Weather from './components/Weather';

function App() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Weather city_name='Paris' />
      <Weather city_name='Los Angeles' />
    </div>
  );
}

export default App;
