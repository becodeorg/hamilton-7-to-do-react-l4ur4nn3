import './App.css';
import Checkbox from './components/checkbox';
import Button from './components/button';

function App() {
  return (
    <div className="App bg-pink-300 text-left pt-10 pb-10">
        <h1 className="ml-10 mb-10 text-2xl uppercase">
        My Todo App <i class="fa-sharp fa-solid fa-heart-circle-check text-white"></i>
        </h1>
        <Button />
        <hr class="mt-5 text-white" />
        <h2 className="ml-10 mt-10 mb-10 text-xl uppercase">
          Todos <i class="fa-solid fa-ellipsis text-white"></i>
        </h2>
        <Checkbox />
    </div>
    );
};

export default App;
