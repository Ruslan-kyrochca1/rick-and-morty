import List from '../../components/UI/List/List';
import { useFetchState } from '../../hooks/useFetchState';

const Location = () => {
  const { fetchState, loadMore, indexLastItem } = useFetchState({ name: 'location' });

  return (
    <div>
      <List type="locations" items={fetchState} loadMore={loadMore} indexLastItem={indexLastItem} />
    </div>
  );
};

export default Location;
