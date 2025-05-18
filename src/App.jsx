import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Input from "./Component/Input";
import { Button } from "./Component/Buttons";
import { useState } from "react";
function App() {
  const [calValue, setcalValue] = useState("");

  function handleBtnClick(value) {
    if (value == "C") {
      setcalValue("");
    } else if (value == "=") {
      setcalValue(eval(calValue));
    } else {
      let newCalValues = calValue + value;
      setcalValue(newCalValues);
      console.log(calValue);
    }
  }
  return (
    <center className="calculator">
      <Input calValue={calValue}></Input>
      <Button handleBtnClick={handleBtnClick}></Button>
    </center>
  );
}

export default App;
