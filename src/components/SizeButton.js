import styles from "../styles/Button.module.css";

const SizeButton = ({ css, description, grayText, text }) => {
  return (
    <div>
      <p className={grayText ? styles.grayName : styles.name}>{description}</p>
      <button className={[styles[`${css}`], styles.btn].join(" ")}>
        {text}
      </button>
    </div>
  );
};

export default SizeButton;
