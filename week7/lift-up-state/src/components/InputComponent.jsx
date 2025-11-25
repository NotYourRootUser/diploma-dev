import styles from '../styles/InputComponent.module.css';

function InputComponent(props) {
  return (
    <div>
      <input
        className={styles.input}
        onChange={props.handleChange}
        value={props.value}
      />
    </div>
  );
}

export default InputComponent;
