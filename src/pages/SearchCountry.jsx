import { Container,  CountryList,  SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  const [searchParams, setSearchParams] =useSearchParams()
  const [error, setError] = useState(null)
  const [loader, setLoader] = useState(null)
  const [regCountries, setRegCountries] = useState([])
  
  useEffect(() => {
    setLoader(true);
    const region = searchParams.get('query')
    
    const fetchData = async () => {
      try {
        const data = await fetchByRegion(region)
        setRegCountries(data)
      }
      catch(error) {console.log('error')
    }
  }
  fetchData();

  }, [searchParams]);

  
  const searchTypeCountry = (query) => {
    setSearchParams({query: query})
  }

  console.log('regCountries', regCountries);
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={searchTypeCountry}/>
        <CountryList items={regCountries} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
