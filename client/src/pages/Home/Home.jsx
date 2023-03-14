import styles from "./Home.module.css";
import { useGetCharactersQuery } from "../../app/api/experimental";
import { Link } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Home = () => {
  const { data, error, isLoading } = useGetCharactersQuery();

  return (
    <div>
      <header>
        <nav>Navbar</nav>
      </header>
      <main style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {data &&
          data.results.map((el) => <PropertyCard key={el.id} property={el} />)}
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
