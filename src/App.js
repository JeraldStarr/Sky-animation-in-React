import logo from './logo.svg';
import './App.css';
import Animated from './Animated';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="balloon-animation">
        <Animated 
          className ="flying-cloud"
          src="/cloud.png"
          ratioX="0.36"
          ratioY="0.34"
        />

        <Animated 
          className ="flying-cloud"
          src="/cloud.png"
          ratioX="0.51"
          ratioY="0.43"
        />
          <Animated 
          className ="flying-cloud"
          src="/cloud.png"
          ratioX="0.76"
          ratioY="0.41"
        />
        <Animated 
          className ="flying-cloud"
          src="/cloud.png"
          ratioX="0.25"
          ratioY="0.31"
        />
        <Animated 
          className ="flying-cloud"
          src="/cloud.png"
          ratioX="0.31"
          ratioY="0.36"
        />

        <Animated 
          className ="flying-balloon"
          src="/balloon.png"
          ratioX="0.31"
          ratioY="0.36"
        />

        </div>
      </header>
    </div>
  );
}

export default App;
