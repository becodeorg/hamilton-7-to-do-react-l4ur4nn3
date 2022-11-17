import './App.css';

function App() {
  return (
    <div className="App">
        <h1>
          My Todo App
        </h1>
        <input type="text" placeholder='Type a new todo'>
        </input>
        <input type="submit" value="Add todo">
        </input>
        <h2>
          Todos
        </h2>
        <input type="checkbox" id="checkbox1" name="checkbox1">
        </input>
        <label for="checkbox1">Learn React</label><br>
        <input type="checkbox" id="checkbox1" name="checkbox1">
        </input>
        <label for="checkbox1">Be Awesome!</label>
    </div>
  );
}

export default App;
