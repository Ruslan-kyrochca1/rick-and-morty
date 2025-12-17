import characters from '../assets/characters.json';
import List from '../components/UI/List/List';

const Characters = () => {
  return (
    <div>
      <List type="characters" items={characters} />
    </div>
  );
};

export default Characters;
