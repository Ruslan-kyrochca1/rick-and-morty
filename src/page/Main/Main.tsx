import classes from './Main.module.scss';

const Main = () => {
  return (
    <div className={classes.container}>
      <h1>Rick and Morty</h1>
      <p>
        Greetings, dear Rick and Morty fan. On our website, you can find information about the characters, episodes, and locations that
        interest you.
      </p>
    </div>
  );
};

export default Main;
