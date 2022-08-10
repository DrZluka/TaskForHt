import './App.scss';
import SomeComponents from "./components/SomeComponents/SomeComponents";
import SomeTextAndImg from "./components/SomeTextAndImg/SomeTextAndImg";

const render = true;

function App() {
  return (
    <>
      <SomeComponents buttonName={"Knopka"}/>
       <SomeTextAndImg/>
    </>
  );
}

export default App;
