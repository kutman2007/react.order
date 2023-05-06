import './App.css';
import { Wer } from './cont';
import { Data } from './cont/data';

function App() {
  return (
    <div className="App">
     {
      Data.map((el ,id)=>{
     return <Wer prop={el} key={id} />
      })
     }
     
    </div>
  );
}

export default App;
