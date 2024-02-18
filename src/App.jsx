import { Header, Heading } from 'components';
import { lazy } from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
// import { Home } from 'pages/Home';
// import { SearchCountry } from 'pages/SearchCountry';
// import { Country } from 'pages/Country';

const Home = lazy(() => import('pages/Home'));
const SearchCountry = lazy(() => import('pages/SearchCountry'));
const Country = lazy(() => import('pages/Country'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/country" element={<SearchCountry />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
