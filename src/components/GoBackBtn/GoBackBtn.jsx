import { Link } from 'react-router-dom';

export const GoBackBtn = ({ children }) => {
  return <Link to="/">{children}</Link>;
};
