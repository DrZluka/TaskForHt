import './App.scss';
import SomeComponents from "./components/SomeComponents/SomeComponents";
import UserList from "./components/UserList/UserList";
import Counter from "./components/Counter/Counter";
import LifeCycle from "./components/LifeCycle/LifeCycle";

const render = true;

function App() {
  return (
    <>
        <SomeComponents text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quidem."}/>
        <UserList users={["Roman", "Grigoriy", "Michail", "Feodor", "Margaritta"]}/>
        <Counter/>
        <LifeCycle/>

    </>
  );
}

export default App;
