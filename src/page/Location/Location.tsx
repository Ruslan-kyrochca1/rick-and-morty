import { useParams } from 'react-router-dom';
import locations from '../../assets/location.json';
import classes from './Location.module.scss';
import NotFountItem from '../NotFountItem';
import ReturnButton from '../../components/molecules/ReturnButton/ReturnButton';

const Location = () => {
  const { id } = useParams();
  const location = locations.find((el) => el.id === Number(id));
  if (!location) {
    return <NotFountItem name={'locations'} />;
  }
  const formattedDate = new Date(location?.created).toLocaleDateString('ru-RU');

  return (
    <div className={classes.container}>
      <h1>{location?.name}</h1>
      <p>Type: {location?.type}</p>
      {location?.dimension !== 'unknown' && <p>Dimension: {location?.dimension}</p>}
      <p>Created: {formattedDate}</p>
      <ReturnButton urlName="locations" />
    </div>
  );
};

export default Location;
