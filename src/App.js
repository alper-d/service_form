import logo from './logo.svg';
import {Provider} from 'react-redux'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
//import {reduxConfig} from './redux/reduxConfig'
import MainComponent from './components/MainComponent'

//const store = reduxConfig()

function App() {
  return (
      <BrowserRouter>
          <MainComponent/>
      </BrowserRouter>
  );
}

export default App;
