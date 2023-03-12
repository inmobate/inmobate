import styles from "./Home.module.css";

import demo from "../../assets/demo.jpg";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <nav className={styles["nav"]}>
        <div className={styles["nav_container"]}>
          <div className={styles["logo"]}>INMOBATE</div>
          <div className={styles["nav_items"]}>
            <div className={styles["nav_item"]}>Comprar</div>
            <div className={styles["nav_item"]}>Alquilar</div>
            <div className={styles["nav_item"]}>Vender</div>
            <div className={styles["nav_item"]}>Sing In</div>
          </div>
        </div>
      </nav>
      <main>
        <section className={styles["section_banner"]}>
          <h1>Tu Portal Inmobiliario</h1>
        </section>
        <section className={styles["section_filter"]}>
          <div className={styles["container_filter"]}>
            <div className={styles["buttons_filter"]}>
              <button>Comprar</button>
              <button>Alquilar</button>
              <button>Vender</button>
            </div>
            <form className={styles["form_filter"]}>
              <select>
                <option value="">Tipo de propiedad</option>
                <option value="">Casas</option>
                <option value="">Departamento</option>
                <option value="">Chalets</option>
                <option value="">Duplex</option>
                <option value="">Terrenos</option>
              </select>
              <input type="text" placeholder="Elegi tu lugar" />
              <button>Mas opciones</button>
              <button>Buscar</button>
            </form>
          </div>
        </section>
        <section className={styles["section_cards"]}>
          <div className={styles["container_cards"]}>
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>Detail</div>
            </div>{" "}
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>Detail</div>
            </div>
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>Detail</div>
            </div>
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>Detail</div>
            </div>
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>Detail</div>
            </div>
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>Detail</div>
            </div>
          </div>
          <button>Ver mas Propiedades Destacadas</button>
        </section>
        <section className={styles["section_hiw"]}>
          <div className={styles["hiw_title"]}>
            <h2>¿Cómo funciona?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles["hiw_items"]}>
            <div className={styles["hiw_item"]}>
              <div className={styles["hiw_svg"]}>SVG</div>
              <h2>Crear una cuenta.</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have Ipsum available. propiedad.
              </p>
            </div>
            <div className={styles["hiw_item"]}>
              <div className={styles["hiw_svg"]}>SVG</div>
              <h2>Encontrar y buscar propiedad.</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have Ipsum available.
              </p>
            </div>
            <div className={styles["hiw_item"]}>
              <div className={styles["hiw_svg"]}>SVG</div>
              <h2>Reservar su propiedad.</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have Ipsum available.
              </p>
            </div>
          </div>
        </section>
        <section className={styles["section_looking"]}>
          <div className={styles["title_looking"]}>
            <h2>¿Buscando la casa de sus sueños?</h2>
            <p>
              Podemos ayudarlo a hacer realidad su sueño de tener una casa
              nueva.
            </p>
          </div>
          <div>
            <button className={styles["button_looking"]}>
              Explora Propiedades
            </button>
          </div>
        </section>
      </main>
      <footer className={styles["footer"]}>
        <h1>INMOBATE</h1>
        <p>© INMOBATE REAL STATE - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
