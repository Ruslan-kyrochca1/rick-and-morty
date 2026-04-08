import { useNavigate } from 'react-router-dom';
import { publicRoute } from '../../../route/publicRoute';
import classes from './ReturnButton.module.scss';

const ReturnButton = ({ urlName }: { urlName: keyof typeof publicRoute }) => {
  const navigate = useNavigate();
  const url = publicRoute[urlName];
  return (
    <button
      className={classes.button}
      onClick={() => {
        navigate(`${url}`);
      }}
    >
      Comeback
    </button>
  );
};

export default ReturnButton;
