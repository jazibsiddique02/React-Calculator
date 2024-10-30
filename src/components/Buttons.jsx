import styles from './Buttons.module.css'
const Buttons = ({ Buttons, onButtonCLick }) => {
    return (
        <div className={styles.buttons}>
            {Buttons.map((item) => (
                <button key={item} onClick={() => onButtonCLick(item)} className={styles.button}>{item}</button>
            ))}

        </div>
    );
}

export default Buttons;
