import location from '../assets/location.json';
import List from '../components/UI/List/List';

const Location = () => {
  return (
    <div>
      <List type="locations" items={location} />
    </div>
  );
};

export default Location;
