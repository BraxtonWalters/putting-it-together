import './App.css';
import PersonCard from './components/PersonCard';

const personObj = [
  {
    firstName: "Jane", 
    lastName: "Doe",
    age: 45,
    hairColor: "Black"
  },
 {
    firstName: "John", 
    lastName: "Smith",
    age: 88,
    hairColor: "Brown"
  },
 {
    firstName: "Millard", 
    lastName: "Fillmore",
    age: 50,
    hairColor: "Brown"
  },
 {
    firstName: "Maria", 
    lastName: "Smith",
    age: 62,
    hairColor: "Brown"
  },
 {
    firstName: "Homie", 
    lastName: "Jackel",
    age: 23,
    hairColor: "red"
  }
]

function App() {
  return (
    <div className="App">
      {personObj.map(key => (
      <PersonCard props = {key}/>
      ))}
      {/* this is the other way kinda of 
      <PersonCard props = {personObj[0]}/>
      <PersonCard props = {personObj[1]}/>
      <PersonCard props = {personObj[2]}/>
      <PersonCard props = {personObj[3]}/>
      <PersonCard props = {personObj[4]}/> 
      */}
    </div>
  );
}

export default App;
