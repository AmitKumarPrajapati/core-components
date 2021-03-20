import React, { useState } from "react";
import { CheckBox } from './Components/CheckBox'
import { RadioButton } from './Components/RadioButton'
import { TextField } from './Components/TextField'
import { DropMenu } from './Components/DropMenu'
import { Toggle } from './Components/Toggle'
import { Tabs } from './Components/Tabs'
import './App.css';

const App = () => {
  const [checkbox, setCheckbox] = useState(false)
  const [radiobox, setRadiobox] = useState(false)

  const handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;
    setCheckbox(name)
  };

  const handleRadioboxChange = (changeEvent) => {
    const { name } = changeEvent.target;
    setRadiobox(name)
  };

  return (
    <div className="container">
      <CheckBox
        label="One"
        isSelected={checkbox}
        onCheckboxChange={handleCheckboxChange}
      />
      <RadioButton
        label="One"
        isSelected={radiobox}
        onRadioBoxChange={handleRadioboxChange}
      />
      <TextField
        title="Problem"
        description="What is the problem that is being solved"
        placeholder="Enter your text here..."
      />
      <TextField
        description="Your Introduction"
        placeholder=""
      />
      <DropMenu />
      <Toggle />
      <Tabs>
        <div label="Group Updates">
          Hey Group, How are you
       </div>
        <div label="Team Updates">
          Hey Team, How are you
       </div>
      </Tabs>
    </div>
  );
}

export default App;