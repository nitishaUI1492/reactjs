import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import GreetClass from './Components/GreetClass'
import EventBind  from './Components/EventBind';
function App() {
  return (
    <div className="App">
   
      <Greet name="gaurav" othername="nitisha"></Greet>
      <GreetClass name="Nishant" othername="Snehal"></GreetClass>
      <EventBind passanything="anything"></EventBind>
    </div>
  );
}

export default App;
