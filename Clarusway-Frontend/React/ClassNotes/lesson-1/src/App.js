import "./App.css";
import ClassComp from "./components/classcomp";
import FuncComp from "./components/funccomponent";

function App() {
  const age = 25;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Age: {age}</h1>
        <ClassComp old={age} car="BMW" />
        <FuncComp old={age + age} color="yellow" />
        {/* Edit <code>src/App.js</code> and save to reload. */}
      </header>
    </div>
  );
}
export default App;
