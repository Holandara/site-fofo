import background from './elementos/backgroundimg1.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header >
      <div class="container">

        <div class="row">
          
            <div className="col-4">
              <div className="blured">teste</div>
          </div>

          <div className="col-4">
            <img className="imagem1" src={background} width="100%" height="100%"/>
          
        </div>

        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
