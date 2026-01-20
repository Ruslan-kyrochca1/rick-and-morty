import { useParams } from 'react-router-dom';
import characters from '../../assets/characters.json';
import classes from './Character.module.scss';
import ImageItem from '../../components/atoms/ImageItem/ImageItem';
import NotFountItem from '../NotFountItem';
import ReturnButton from '../../components/molecules/ReturnButton/ReturnButton';

const Character = () => {
  const { id } = useParams<{ id: string }>();

  const character = characters.find((element) => element.id === Number(id));
  if (!character) {
    return <NotFountItem name={'characters'} />;
  }
  const formattedDate = new Date(character?.created).toLocaleDateString('ru-RU');
  return (
    <div className={classes.container}>
      <h1>{character.name}</h1>
      <ImageItem image={character.image} name={character.name} />
      <p>Status: {character.status ? character.status : 'Засекречено'}</p>
      <p>Species: {character.species ? character.species : 'Засекречено'}</p>
      {character.type && <p>Type: {character.type}</p>}
      <p>Gender: {character.gender ? character.gender : 'Засекречено'}</p>
      <p>Created: {formattedDate ? formattedDate : 'Засекречено'}</p>
      <ReturnButton urlName="characters" />
    </div>
  );
};

export default Character;
