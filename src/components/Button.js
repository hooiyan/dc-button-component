import styles from '../styles/Button.module.css';

const Button = ({ css, description, grayText, text = "Default" }) => {
  return (
    <div>
      <p className={grayText ? styles.grayName : styles.name}>{description}</p>
      <button className={[styles[`${css}`], styles.btn].join(' ')}>{text}</button>
    </div>
  )
}

export default Button;