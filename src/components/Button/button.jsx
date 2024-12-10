// /src/components/Button/Button.jsx
import styles from './button.module.scss';

export const Button = ({ action, size, theme, text }) => {
  // Dynamisk valg af knapstørrelse og tema baseret på props
  const buttonSize = size === 'small' ? styles.btnSmall 
                    : size === 'medium' ? styles.btnMedium 
                    : styles.btnLarge;

  const buttonTheme = theme === 'dark' ? styles.btnDark : styles.btnLight;

  return (
    <button
      onClick={action}
      className={`${styles.button} ${buttonSize} ${buttonTheme}`} // Brug de valgte stilarter
    >
      {text}
    </button>
  );
};
