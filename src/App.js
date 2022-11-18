import './App.css';
import Button from './components/button'

function App() {
  return (
    <div class="App bg-cyan-800 text-left pt-10 pb-10">
        <h1 class="ml-10 mb-10 text-2xl">
          My Todo App
        </h1>
        <input type="text" placeholder='Type a new todo' class="ml-10 placeholder:pl-3 placeholder:text-sm">
        </input>
        <Button />
        <hr />
        <h2 class="ml-10 mt-10 mb-10 text-xl">
          Todos
        </h2>
        <input type="checkbox" id="checkbox1" name="checkbox1" class="ml-10">
        </input>
        <label for="checkbox1" class="ml-5 text-base">Learn React</label><br />
        <input type="checkbox" id="checkbox1" name="checkbox1" class="ml-10">
        </input>
        <label for="checkbox1" class="ml-5 text-base">Be Awesome!</label>
    </div>
    );
};

export default App;
