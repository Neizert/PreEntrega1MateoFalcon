
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';


import Navbar1 from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar1/>
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
