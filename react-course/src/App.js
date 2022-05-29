import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div className="flex-cards">
        <Todo text="Learn React"/>
        <Todo text="Revise Node"/>
        <Todo text="Follow codewith Mosh"/>
        <Todo text="Build React Portfolio"/>
      </div>
    </div>
  );
}

export default App;
