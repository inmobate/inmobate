import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <nav className={styles["nav"]}>
        <div className={styles["nav_container"]}>
          <div className={styles["logo"]}>INMOBATE</div>
          <div className={styles["nav_items"]}>
            <div className={styles["nav_item"]}>Sale</div>
            <div className={styles["nav_item"]}>Rental</div>
            <div className={styles["nav_item"]}>Sing In</div>
          </div>
        </div>
      </nav>
      <main>
        <section className={styles["section_banner"]}>
          <h1>El Inmueble que buscás, está más cerca de lo que pensás…</h1>
        </section>
        <section className={styles["section_filter"]}>
          <div className={styles["container_filter"]}>
            <form>
              <input type="text" />
              <button>Search</button>
            </form>
            <div>Filter</div>
            <div>Filter</div>
          </div>
        </section>
        <section className={styles["section_cards"]}>
          <div className={styles["container_cards"]}>
            <div className={styles["card"]}>
              <div className={styles["container_card"]}>
                <div className={styles[""]}>
                  <img src="" alt="" />
                </div>
              </div>
              <div className={styles["container_info"]}>
                <div className={styles["info"]}>Informacion</div>
              </div>
            </div>
            <div className={styles["card"]}>Card</div>
            <div className={styles["card"]}>Card</div>
            <div className={styles["card"]}>Card</div>
            <div className={styles["card"]}>Card</div>
            <div className={styles["card"]}>Card</div>
          </div>
        </section>
      </main>
      <footer>
        <h1>INMOBATE</h1>
        <p>© INMOBATE REAL STATE - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
