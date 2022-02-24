import styles from "../styles/Button.module.css";
import iconStyles from "../styles/IconButton.module.css";

const IconButton = ({
  description,
  grayText,
  icon,
  left,
  text = "Default",
}) => {
  return (
    <div>
      <p className={grayText ? styles.grayName : styles.name}>{description}</p>
      {left ? (
        <button className={[iconStyles.icon, styles.btn].join(" ")}>
          <span className={iconStyles.left}>{icon}</span>
          <span>{text}</span>
        </button>
      ) : (
        <button className={[iconStyles.icon, styles.btn].join(" ")}>
          <span>{text}</span>
          <span className={iconStyles.right}>{icon}</span>
        </button>
      )}
    </div>
  );
};

export default IconButton;
