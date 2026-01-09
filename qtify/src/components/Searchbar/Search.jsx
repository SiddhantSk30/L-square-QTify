import styles from "./Search.module.css";

export default function Search() {
    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                className={styles.search}
                placeholder="Search an album of your choice"
            />

            <button className={styles.button}>
                🔍
            </button>
        </div>
    );
}
