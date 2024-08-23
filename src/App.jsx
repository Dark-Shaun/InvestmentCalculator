import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/userInput"
import Results from "./components/Results";



function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:3000,
    expectedReturn:12,
    duration:6
  
  });
  const trueValue=userInput.duration>=1;

  function handleUserInput(inputIdentifier,newValue){
    setUserInput((prevIdentifier)=>({
        ...prevIdentifier,
        [inputIdentifier]: +newValue
    }))
  }
  return (
    <div>
    <Header></Header>
    <UserInput userInput={userInput} onChange={handleUserInput}></UserInput>
    {!trueValue && <p className='center'> Please Enter a Value Greater than 0</p>}
    {trueValue && <Results input={userInput}></Results>}
    </div>
  )
}

export default App
