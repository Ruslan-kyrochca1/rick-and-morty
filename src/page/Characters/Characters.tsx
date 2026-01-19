import List from '../../components/UI/List/List';
import { useFetchState } from '../../hooks/useFetchState';

const Characters = () => {
  const { fetchState, loadMore, indexLastItem } = useFetchState({ name: 'character' });

  return (
    <div>
      <List type="characters" items={fetchState} loadMore={loadMore} indexLastItem={indexLastItem} />
    </div>
  );
};

export default Characters;
