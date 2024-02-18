import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ items }) => {
  return (
    <Grid>
      {items.map(({ id, country, flag }) => (
        <GridItem key={id}>
          <Link>
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
