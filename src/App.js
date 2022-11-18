import './App.css';
import Checkbox from './components/checkbox';
import Button from './components/button';

function App() {
  return (
    <div class="App bg-cyan-800 text-left pt-10 pb-10">
        <h1 class="ml-10 mb-10 text-2xl">
          My Todo App
        </h1>
        <Button />
        <hr />
        <h2 class="ml-10 mt-10 mb-10 text-xl">
          Todos
        </h2>
        <Checkbox />
    </div>
    );
};

export default App;
