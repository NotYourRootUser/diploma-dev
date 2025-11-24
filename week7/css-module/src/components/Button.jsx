import styles from "./Button.module.css";

function Button(props) {
  return (
    <>
      <button className={styles.button}>
        {props.children}
        </button>
      {/* <h1 className={styles.h1}>heading in button Component</h1>
      <button className={`${styles.button} ${styles.link}`}>Button with multi classes</button>
      <button className="global-class">Im globally styled</button> */}
    </>
  );
}

export default Button;
