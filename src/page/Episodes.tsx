import episodes from '../assets/episode.json';
import List from '../components/UI/List/List';

const Episodes = () => {
  return (
    <div>
      <List type="episodes" items={episodes} />
    </div>
  );
};

export default Episodes;
