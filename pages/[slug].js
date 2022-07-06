// mui componenets
import { Button} from "@mui/material";
import { Container } from "@mui/system";

// react/next
import { useContext, useEffect} from "react";
import Image from "next/image";

// custom
import { BorderContext } from "../src/context/CountryBorderContext";

export const getStaticPaths = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    const paths = data.map(country => {
        return {
            params: {slug: (country.name.common).toLowerCase()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {

    const countryName = params.slug
	const res = await fetch('https://restcountries.com/v3.1/name/' + countryName);
	const country = await res.json();
    const relData = country.map(data => ({
		name: data.name, 
		population: data.population,
		region: data.region,
		subregion: data.subregion,
		languages: data.languages,
		tld: data.tld,
		currencies: data.currencies,
		capital: data.capital ? data.capital : null,
		flags: data.flags,
        borderCountries: data.borders ? data.borders : null
		}
	))
	return {
		props: { relData }
	}
}

export default function Country({relData}) {
    const {borders} = useContext(BorderContext)
    const [country] = relData;

    useEffect(() => {
        console.log(borders);
    }, [borders])

    return (
        <Container maxWidth='xl'>
            <Button variant="contained" color="primary">Back</Button>

            {/* <Image alt={`${country.name.common} flag`}/> */}
        </Container>
    )
}
