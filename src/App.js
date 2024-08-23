import { data } from './constants/data';
import './App.css';
import Selection from './components/Selection';

function App() {
  return (
    <div className="App">
    <Selection data={data}/>
    </div>
  );
}

export default App;
