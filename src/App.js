
import './App.css';
import SomeClassComponent from './components/SomeClassComponent';

function App() {
  return (
    <div className="App">
      <SomeClassComponent firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <SomeClassComponent firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
      <SomeClassComponent firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} />
      <SomeClassComponent firstName={"Brian"} lastName={"Vera"} age={26} hairColor={"Brown"} />
    </div>
  );
}

export default App;
