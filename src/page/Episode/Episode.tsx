import { useParams } from 'react-router-dom';
import episodes from '../../assets/episode.json';
import classes from './Episode.module.scss';
import NotFountItem from '../NotFountItem';
import ReturnButton from '../../components/UI/ReturnButton/ReturnButton';

const Episode = () => {
  const { id } = useParams<{ id: string }>();
  const episode = episodes.find((el) => el.id === Number(id));
  if (!episode) {
    return <NotFountItem name={'episodes'} />;
  }
  const formattedDate = new Date(episode?.created).toLocaleDateString('ru-RU');

  return (
    <div className={classes.container}>
      <h1>{episode.name}</h1>
      <p>Air date: {episode.air_date}</p>
      <p>Season: {Number(episode.episode[1] + episode.episode[2])}</p>
      <p>Episode: {Number(episode.episode[4] + episode.episode[5])}</p>
      <p>Created:{formattedDate}</p>
      <ReturnButton urlName="episodes" />
    </div>
  );
};

export default Episode;
