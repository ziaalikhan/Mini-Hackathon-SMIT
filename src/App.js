import './App.css';
import AppRouter from './Router/AppRouter';
// import store from './store';
// import {Provider} from 'react-redux';


function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <AppRouter />

      {/* </Provider> */}
      
    </div>
  );
}

export default App;
