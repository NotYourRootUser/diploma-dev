import styles from '../styles/ShowInput.module.css';

function ShowInput({ userInput }) {
  return (
    <div className={styles.displaySection}>
      This is the ShowInput Component:
      <br />
      Text: {userInput}
    </div>
  );
}

export default ShowInput;
