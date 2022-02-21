import styles from "../styles/Button.module.css";

const Button = ({ componentName, text }) => {
  return (
    <div>
      <p className={styles.name}>{componentName}</p>
      <btn className={styles.default}>{text}</btn>
    </div>
  );
};

export default Button;
