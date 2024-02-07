import styles from './TitleSection.module.css';

export const TitleSection = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
