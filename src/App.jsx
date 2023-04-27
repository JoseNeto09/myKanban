import './App.css';
import Column from './components/Column';

function App() {
  return (
    <div className="App">
      <Column state="PLANEJADO" />
      <Column state="ANDAMENTO" />
      <Column state="FEITO" />
    </div>
  );
}

export default App;
