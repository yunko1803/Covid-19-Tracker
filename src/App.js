import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import covid19 from './images/covid19.png';

class App extends React.Component {
	state = {
		data: {},
		country: '',
	};

	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({
			data: fetchedData,
		});
		console.log(fetchedData);
	}
	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		console.log(fetchedData);
		this.setState({ data: fetchedData, country });
	};
	render() {
		const { data, country } = this.state;
		console.log(data);
		return (
			<div className={styles.container}>
				<img className={styles.image} alt="covid19" src={covid19} />
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
