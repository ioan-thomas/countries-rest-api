// mui componenets
import { Box, Button, Grid, Typography} from "@mui/material";
import { Container, maxWidth } from "@mui/system";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// react/next
import { useContext, useEffect} from "react";
import Image from "next/image";

// custom
import { BorderContext } from "../src/context/CountryBorderContext";
import SingleCountryLayout from "../components/SingleCountryLayout";

export const getStaticPaths = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    const paths = data.map(country => {
        return {
            params: {slug: (country.name.common).toLowerCase()}
        }
    })
    console.log(paths.length);
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
    console.log(borders);

    // useEffect(() => {
    //     console.log(borders);
    // }, [borders])

    return (
        <Container maxWidth='xl'>
            <Button variant="contained" color="primary" sx={{margin: '40px 0 64px 0', padding: '6px 23px'}}>
                <Box sx={{display: 'flex', gap: 1}}>
                    <KeyboardBackspaceIcon fontSize="small"/>
                    <Typography textTransform="capitalize" sx={{fontSize: '14px'}}>Back</Typography>
                </Box>
            </Button>

            <Box variant='div' sx={{background: `url(${country.flags.png || country.flags.svg})`,
                backgroundSize: 'cover',
                maxWidth:'560px', 
                minWidth: '60vw',
                maxHeight: '401px',
                minHeight: '60vw',
                marginBottom: '44px'
                }}></Box>
                
            

        
            <SingleCountryLayout country={country}/>
        </Container>
    )
}

{/* <Box variant='div' sx={{maxWidth: '560px', minWidth: '60vw', maxHeight: '401px', minHeight: '60vw',position: 'relative', overflow: 'hidden', borderRadius: '15px', marginBottom: '44px'}}>
<Image alt={`${country.name.common} flag`} 
src={country.flags.png || country.flags.svg} 
layout='fill'
objectFit="contain"
/>
</Box> */}
