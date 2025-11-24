import styles from "./Image.module.css";
import dogSrc from "../assets/dog.jpg"; // image inside src/assets

export default function Image() {
  return (
    <div className={styles.wrapper}>

      {/* Public images */}
      <h1 className={styles.title}>Images in Public Folder</h1>
      <div className={styles.row}>
        <img className={styles.img} src="/cat.png" alt="Public Cat" />
        <img className={styles.img} src="/dog.jpg" alt="Public Dog" />
      </div>

      {/* Src images */}
      <h1 className={styles.title}>Images in SRC</h1>
      <div className={styles.row}>
        <img className={styles.img} src={dogSrc} alt="Dog in SRC" />
      </div>

    </div>
  );
}
