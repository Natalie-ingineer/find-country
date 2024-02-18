import { Container, Loader, Section } from 'components';
import { CountryInfo } from '../components/CountryInfo/CountryInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';
import { GoBackBtn } from 'components';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Country = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { countryId } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      setLoading(true);
      try {
        const result = await fetchCountry(countryId);
        setCountry(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, [countryId]);

  return (
    <Section>
      <GoBackBtn>
        <FaArrowLeftLong />
        Back to countries
      </GoBackBtn>
      {error && <p>Something went wrong...</p>}
      <Container>{country && !error && <CountryInfo {...country} />}</Container>
      {loading && <Loader />}
    </Section>
  );
};

export default Country;
