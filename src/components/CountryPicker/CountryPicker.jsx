import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			setFetchedCountries(await fetchCountries());
		};
		fetchAPI();
	}, [setFetchedCountries]);
	console.log(fetchedCountries);
	return (
		<FormControl className={styles.formControl}>
			<NativeSelect default="" onChange={(e) => handleCountryChange(e.target.value)}>
				<option value="">global</option>
				{fetchedCountries.map((country, i) => {
					return (
						<option key={i} value={country}>
							{country}
						</option>
					);
				})}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
