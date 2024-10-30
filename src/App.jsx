import Display from './components/display';
import styles from './App.module.css'
import Buttons from './components/Buttons';
import { useState } from 'react';

function App() {

  let ButtonsList = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];


  let [calVal, setCalVal] = useState("");

  const onButtonCLick = (BtnName) => {
    if (BtnName === 'C') {
      setCalVal("");
    }
    else if (BtnName === '=') {
      setCalVal(eval(calVal));
    }

    else {
      setCalVal(calVal + BtnName);
    }


  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <Buttons onButtonCLick={onButtonCLick} Buttons={ButtonsList} />
    </div >
  )
}

export default App;
