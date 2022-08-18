// mui components
import { Container } from "@mui/system";

// custom
import Filter from "../components/Filter";
import SearchField from "../components/SearchField";
import Cards from "../components/CardLayout";
import { BorderContext } from "../src/context/CountryBorderContext";

// react/next
import { useContext, useEffect, useState} from "react";

export const getStaticProps = async () => {

	const res = await fetch('https://restcountries.com/v3.1/all');
	const data = await res.json();
	
	const countryBorders = {};

	const relData = data.map(country => {
		countryBorders[country.cca3] = country.name.common;
		return { name: country.name.common, 
		population: country.population,
		region: country.region,
		capital: country.capital || null,
		flags: country.flags,
		cca3: country.cca3}
	})

	return {
		props: { countries: relData, countryBorders},
        revalidate: 250
	}
}

export default function Home({countries, countryBorders}) {
	const {addBorders} = useContext(BorderContext);
	const [filterRegion, setFilterRegion] = useState('all');
	const [searchCriteria, setSearchCriteria] = useState('')
	const [countriesToDisplay, setCountriesToDisplay] = useState(countries)

	useEffect(() => {
		addBorders(countryBorders)
	}, [countryBorders, addBorders])

	const changeFilter = (region) => {
		setFilterRegion(region);
    }

	const updateSearchCriteria = criteria => {
		setSearchCriteria(criteria);
	}

	useEffect(() => {
		setCountriesToDisplay(countries.filter(country => country.name.toLowerCase().includes(searchCriteria.toLowerCase())));
	}, [searchCriteria, countries])
	
	
	return (
		<Container maxWidth='lg' component='main'>
			<Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: ['24px 0 32px 0', '48px auto']}}>
				<SearchField updateSearchCriteria={updateSearchCriteria}/>
				<Filter countries={countries} changeFilter={changeFilter}/>
			</Container>
			<Cards countries={countriesToDisplay} filterRegion={filterRegion} />
		</Container>
	);
}
