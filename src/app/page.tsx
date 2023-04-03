import styles from "./page.module.css";

export default function Home() {
  const now = new Date();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          According to this page, &quot;now&quot; is:&nbsp;
          <code className={styles.code}>{now.toString()}</code>
        </p>
      </div>
    </main>
  );
}
