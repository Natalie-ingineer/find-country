import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css'
import { useState } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({onSubmit}) => {
  const [currentRegion, setCurrentRegion]=useState('')

  const handleChange = (event) => {
    setCurrentRegion(event.target.value)
  }

  const onClick = (event) => {
    event.preventDefault();
    onSubmit(currentRegion);
    setCurrentRegion('');
  }


  return (
    <form onSubmit={onClick} className={styles.form}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
        onChange={handleChange}
      >

        <option disabled value="default">
          Select a region
        </option>
        {regions.map(({ value, id, name }) =>
          <option key={id} value={value}>{name}</option>
        )}

      </select>
    </form>)
};
