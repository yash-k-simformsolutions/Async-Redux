import './App.css';
import DisplayTable from './components/DisplayTable';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <DisplayTable />
      </div>
    </Provider>
  );
}

export default App;