import logo from './logo.svg';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './app/store';
import Count from './components/Count'
import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Count />
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
