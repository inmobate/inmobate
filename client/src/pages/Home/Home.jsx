import styles from "./Home.module.css";

import { Link } from "react-router-dom";

import demo from "../../assets/demo.jpg";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <nav className={styles["nav"]}>
        <div className={styles["nav_container"]}>
          <div className={styles["logo"]}>INMOBATE</div>
          <div className={styles["nav_items"]}>
            <Link>
              <div className={styles["nav_item"]}>Comprar</div>
            </Link>
            <Link>
              <div className={styles["nav_item"]}>Alquilar</div>
            </Link>
            <Link>
              <div className={styles["nav_item"]}>Vender</div>
            </Link>
            <Link>
              <div className={styles["nav_item"]}>Iniciar Secion</div>
            </Link>
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
              <input type="button" value="Mas opciones" />
              <button>Buscar</button>
            </form>
          </div>
        </section>
        <section className={styles["section_cards"]}>
          <div className={styles["container_cards"]}>
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>
                <h2>Luxury Family Home</h2>
                <p>1421 San Pedro St, Los Angeles, CA 90015</p>
                <div>
                  <p>3 Bedrooms</p>
                  <p>2 Bathrooms</p>
                  <p>1250 square Ft</p>
                </div>
              </div>
            </div>
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>
                <h2>Luxury Family Home</h2>
                <p>1421 San Pedro St, Los Angeles, CA 90015</p>
                <div>
                  <p>3 Bedrooms</p>
                  <p>2 Bathrooms</p>
                  <p>1250 square Ft</p>
                </div>
              </div>
            </div>
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>
                <h2>Luxury Family Home</h2>
                <p>1421 San Pedro St, Los Angeles, CA 90015</p>
                <div>
                  <p>3 Bedrooms</p>
                  <p>2 Bathrooms</p>
                  <p>1250 square Ft</p>
                </div>
              </div>
            </div>
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>
                <h2>Luxury Family Home</h2>
                <p>1421 San Pedro St, Los Angeles, CA 90015</p>
                <div>
                  <p>3 Bedrooms</p>
                  <p>2 Bathrooms</p>
                  <p>1250 square Ft</p>
                </div>
              </div>
            </div>
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>
                <h2>Luxury Family Home</h2>
                <p>1421 San Pedro St, Los Angeles, CA 90015</p>
                <div>
                  <p>3 Bedrooms</p>
                  <p>2 Bathrooms</p>
                  <p>1250 square Ft</p>
                </div>
              </div>
            </div>
            <div className={styles["card"]}>
              <img src={demo} alt="" />
              <div>
                <h2>Luxury Family Home</h2>
                <p>1421 San Pedro St, Los Angeles, CA 90015</p>
                <div>
                  <p>3 Bedrooms</p>
                  <p>2 Bathrooms</p>
                  <p>1250 square Ft</p>
                </div>
              </div>
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
              <div className={styles["hiw_svg"]}>
                <svg
                  class="svg-inline--fa fa-user text-blue"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                  ></path>
                </svg>
              </div>
              <h2>Crear una cuenta.</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have Ipsum available. propiedad.
              </p>
            </div>
            <div className={styles["hiw_item"]}>
              <div className={styles["hiw_svg"]}>
                <svg
                  class="svg-inline--fa fa-magnifying-glass text-orange"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="magnifying-glass"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                  ></path>
                </svg>
              </div>
              <h2>Encontrar y buscar propiedad.</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have Ipsum available.
              </p>
            </div>
            <div className={styles["hiw_item"]}>
              <div className={styles["hiw_svg"]}>
                <svg
                  class="svg-inline--fa fa-paper-plane text-green"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="paper-plane"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z"
                  ></path>
                </svg>
              </div>
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
            <Link>
              <button className={styles["button_looking"]}>
                Explora Propiedades
              </button>
            </Link>
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
