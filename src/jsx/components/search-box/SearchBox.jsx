import styles from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  return (
    <form className={styles['searchbox']}>
      <label className={styles['search-label']} htmlFor="searchInput">
        Find contacts by name:
      </label>
      <input
        className={styles['search-input']}
        id="searchInput"
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};
