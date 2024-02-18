import { ClimbingBoxLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <ClimbingBoxLoader color="black" />
    </div>
  );
};
