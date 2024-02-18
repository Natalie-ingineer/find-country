import axios from 'axios';
import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        {error && <Heading title={error} />}
        {loader && <Loader />}
        <CountryList items={countries} />
      </Container>
    </Section>
  );
};

export default Home;
