import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import flagEmojiToPNG from "../functions/flagEmojiToPNG";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  const { lat, lng } = position;

  return (
    <li>
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={`${styles.cityItem} ${id===currentCity.id && styles['cityItem--active']}`}>
        <span className={styles.emoji}>{flagEmojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};
export default CityItem;
