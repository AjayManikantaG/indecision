import './App.css';
import Props from './playground/Props';

function App() {
  const options = ['one', 'two', 'three'];
  const handleClick = () => {
    alert('Clicked');
  };

  return (
    <div className='App'>
      <Props options={options} handleClick={handleClick} />
    </div>
  );
}

export default App;
