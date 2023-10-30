import './App.css';
import Netflix from './components/Netflix/Netflix';
import BBC from './components/BBC/BBC';
import AirBB from './components/AirBB/AirBB';
import Counter from './components/Counter/Counter';
import Map from './components/Map/Map';
import Calculator from './components/Calculator/Calculator';
import ToDoList from './components/ToDoList/ToDoList';


function App() {
  return (
    <div>
    <ToDoList />
    <Calculator />
    <Map />
    <Counter />
    <Netflix />
    <BBC />
    <AirBB />

    </div>
  );
}

export default App;
