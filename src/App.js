import './App.css';
import Header from './components/Header/Header';
import CardVideo from './components/CardVideo/CardVideo';

function App() {

  return (
    <div className='general'>
      <div className='container'>
        <Header />
      </div>
      <div>
        <CardVideo />
      </div>
    </div>
  );
}

export default App;
