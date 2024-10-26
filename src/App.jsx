import Display from './components/display';
import styles from './App.module.css'
import Buttons from './components/Buttons';

function App() {

  let ButtonsList = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  return (
    <div className={styles.calculator}>
      <Display />
      <Buttons Buttons={ButtonsList} />
    </div >
  )
}

export default App;
