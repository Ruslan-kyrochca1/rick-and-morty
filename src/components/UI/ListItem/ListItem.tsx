import { NavLink } from 'react-router-dom';
import { publicRoute } from '../../../route/publicRoute';
import classes from './ListItem.module.scss';
import ImageItem from '../ImageItem/ImageItem';

type ListItemProps = {
  id: number;
  name: string;
  image?: string;
  type: 'characters' | 'episodes' | 'locations';
};

const ListItem = ({ name, image, id, type }: ListItemProps) => {
  return (
    <NavLink className={classes.item} to={`${publicRoute[type]}/${id}`}>
      <h2 className="title">{name}</h2>
      {type === 'characters' && <ImageItem image={image} name={name} />}
    </NavLink>
  );
};

export default ListItem;
