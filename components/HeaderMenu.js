import styles from "./layout.module.css";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <div>
      <ul className={styles.headerMenu}>
        <Link className={styles.headerLink} href="/">
          <li>Home</li>
        </Link>

        <div className={styles.headerLink}>
          <Link className={styles.headerLink} href="/">
            <li>Blog</li>
          </Link>
          <Link className={styles.headerLink} href="/quiz">
            <li>Quiz</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}
