import { NavLink } from 'react-router-dom';
import { publicRoute } from '../../../route/publicRoute';
import classes from './ListItem.module.scss';
import ImageItem from '../ImageItem/ImageItem';
import useLastItemObserver from '../../../hooks/useLastItemObserver';

type ListItemProps = {
  id: number;
  name: string;
  image?: string;
  type: 'characters' | 'episodes' | 'locations';
  indexLastItem: number;
  loadMore: () => void;
};

const ListItem = ({ name, image, id, type, indexLastItem, loadMore }: ListItemProps) => {
  const lastItemRef = useLastItemObserver<HTMLAnchorElement>({
    onLastItemVisible: loadMore,
  });
  return (
    <NavLink ref={id === indexLastItem ? lastItemRef : undefined} className={classes.item} to={`${publicRoute[type]}/${id}`}>
      <h2 className="title">{name}</h2>
      {type === 'characters' && <ImageItem image={image} name={name} />}
    </NavLink>
  );
};

export default ListItem;
