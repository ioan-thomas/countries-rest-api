// mui componenets
import { Box, Button, Typography, useTheme} from "@mui/material";
import { Container} from "@mui/system";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// custom
import SingleCountryLayout from "../components/SingleCountryLayout";
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
		props: { relData },
        revalidate: 250
	}
}

export default function Country({relData}) {
    const theme = useTheme()
    const [country] = relData;

    // useEffect(() => {
    //     console.log(borders);
    // }, [borders])

    return (
            <Container maxWidth='lg'>
                <Link href={'/'}><Button variant="contained" color="primary" sx={{margin: '40px 0 64px 0', padding: '6px 23px', display: 'block', '&:hover':{backgroundColor: theme.palette.hoverColor.primary, boxShadow: 'none'}, boxShadow: theme.palette.boxShadow}}>
                    <Box sx={{display: 'flex', gap: 1}}>
                        <KeyboardBackspaceIcon fontSize="small"/>
                        <Typography textTransform="capitalize" sx={{fontSize: '14px'}}>Back</Typography>
                    </Box>
                </Button></Link>

                <Box component='div' sx={{display: 'flex', gap: '5vw', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', alignItems: 'center'}}>
                    <Box style={{margin: ' 0px 0px 44px 0px'}}>
                        <Image alt={`${country.name.common} flag`} 
                        src={country.flags.png || country.flags.svg} 
                        height={401}
                        width={560}
                        />
                    </Box>
                        
                    <SingleCountryLayout country={country}/>
                </Box>
            </Container>
    )
}
