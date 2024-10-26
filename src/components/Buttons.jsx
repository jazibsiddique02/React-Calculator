import styles from './Buttons.module.css'
const Buttons = ({ Buttons }) => {
    return (
        <div className={styles.buttons}>
            {Buttons.map((item) => (
                <button key={item} className={styles.button}>{item}</button>
            ))}

        </div>
    );
}

export default Buttons;
