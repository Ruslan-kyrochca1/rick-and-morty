import List from '../../components/organisms/ItemsList/List';
import { useFetchState } from '../../hooks/useFetchState';

const Episodes = () => {
  const { fetchState, loadMore, indexLastItem } = useFetchState({ name: 'episode' });

  return (
    <div>
      <List type="episodes" items={fetchState} loadMore={loadMore} indexLastItem={indexLastItem} />
    </div>
  );
};

export default Episodes;
