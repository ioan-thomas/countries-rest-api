// mui componenets
import { Box, Button, Typography, useTheme} from "@mui/material";
import { Container} from "@mui/system";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// custom
import SingleCountryLayout from "../components/SingleCountryLayout";

// react/next
import Image from "next/image";
import Link from "next/link";

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
	const res = await fetch('https://restcountries.com/v3.1/all');
	const data = await res.json();
    const countryBorders = {}
    data.forEach(country => countryBorders[country.cca3] = country.name.common)

    const relData = data
    .filter(country => country.name.common.toLowerCase() === countryName)
    .map(country => {
        return { 
            name: country.name ? country.name : 'Not available', 
            population: country.population ? country.population : 'Not available',
            region: country.region ? country.region : 'Not available',
            subregion: country.subregion ? country.subregion : 'Not available',
            languages: country.languages ? country.languages : 'Not available',
            tld: country.tld ? country.tld : 'Not available',
            currencies: country.currencies ? country.currencies : 'Not available',
            capital: country.capital ? country.capital : null,
            flags: country.flags ? country.flags : 'Not available',
            borders: country.borders ? country.borders : null
        }

    })

	return {
		props: { relData, countryBorders },
        revalidate: 250
	}
}

export default function Country({relData, countryBorders}) {
    const theme = useTheme()
    const [country] = relData

    return (
            <Container maxWidth='lg'>
                <Link href={'/'}><Button variant="contained" color="primary" sx={{margin: '40px 0 64px 0', padding: '6px 23px', display: 'block', '&:hover':{backgroundColor: theme.palette.hoverColor.primary, boxShadow: 'none'}, boxShadow: theme.palette.boxShadow.primary}}>
                    <Box sx={{display: 'flex', gap: 1}}>
                        <KeyboardBackspaceIcon fontSize="small"/>
                        <Typography textTransform="capitalize" sx={{fontSize: '14px'}}>Back</Typography>
                    </Box>
                </Button></Link>

                <Box component='div' sx={{display: 'flex', gap: '5vw', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', alignItems: 'center'}}>
                    <Box style={{margin: ' 0px 0px 44px 0px'}}>
                        <Image alt={`${country.name.common} flag`} 
                        src={country.flags.svg || country.flags.png} 
                        height={401}
                        width={560}
                        />
                    </Box>
                        
                    <SingleCountryLayout country={country} allBorders={countryBorders}/>
                </Box>
            </Container>
    )
}

    

