import logo from './logo.svg';
import {Provider} from 'react-redux'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {reduxConfig} from './redux/ReduxConfig'
import MainComponent from './components/MainComponent'

const store = reduxConfig()

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <MainComponent/>
        </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
