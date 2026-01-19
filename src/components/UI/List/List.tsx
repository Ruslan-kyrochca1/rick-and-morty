import type { ListType } from '../../../types/types';
import ListItem from '../ListItem/ListItem';
import classes from './List.module.scss';

const List = ({ items, type, loadMore, indexLastItem }: ListType) => {
  return (
    <div className={classes.list}>
      {items.map((item) => {
        return (
          <ListItem
            type={type}
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            loadMore={loadMore}
            indexLastItem={indexLastItem}
          />
        );
      })}
    </div>
  );
};

export default List;
