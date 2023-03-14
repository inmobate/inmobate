import s from "./PropertyCard.module.css";

const PropertyCard = ({ property }) => {
  const { name } = property;
  return (
    <div className={s.PropertyCard}>
      <h3>{name}</h3>
    </div>
  );
};

export default PropertyCard;
