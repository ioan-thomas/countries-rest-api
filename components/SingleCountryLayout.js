import { Box, Grid, Typography } from "@mui/material";

import DisplayBorderCountries from "./DisplayBorderCountries";


export default function SingleCountryLayout({country}) {
    const nativeKey = Object.keys(country.name.nativeName)[0];
    const theCurrency = Object.keys(country.currencies)[0];
  return (
    <Grid container spacing={2}>
                <Grid item xs={12} lg={12}>
                    <Typography variant="h3" sx={{fontSize: [22, 32]}}>{country.name.common}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography variant="body7" component='span' sx={{fontSize: [14, 16]}}>Native Name: </Typography>
                        <Typography component='span' variant="body6" sx={{fontSize: [14, 16]}}>{country.name.nativeName[nativeKey].common}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span' sx={{fontSize: [14, 16]}}>Population: </Typography>
                        <Typography component='span' variant="body6" sx={{fontSize: [14, 16]}}>{country.population.toLocaleString()}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span' sx={{fontSize: [14, 16]}}>Region: </Typography>
                        <Typography component='span' variant="body6" sx={{fontSize: [14, 16]}}>{country.region}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span' sx={{fontSize: [14, 16]}}>Sub Region: </Typography>
                        <Typography component='span' variant="body6" sx={{fontSize: [14, 16]}}>{country.subregion}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span' sx={{fontSize: [14, 16]}}>Capital: </Typography>
                        <Typography component='span' variant="body6" sx={{fontSize: [14, 16]}}>{country.capital}</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography variant="body7" component='span' sx={{fontSize: [14, 16]}}>Top Level Domain: </Typography>
                        <Typography component='span' variant="body6" sx={{fontSize: [14, 16]}}>{country.tld}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span' sx={{fontSize: [14, 16]}}>Currency: </Typography>
                        <Typography component='span' variant="body6" sx={{fontSize: [14, 16]}}>{country.currencies[theCurrency].name}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span' sx={{fontSize: [14, 16]}}>Languages: </Typography>
                        <Typography component='span' variant="body6" sx={{fontSize: [14, 16]}}>{Object.values(country.languages).join(', ')}</Typography>
                    </Box>
                </Grid>

                {country.borderCountries && <Grid item xs={12} sm={12}>
                    <Box>
                        <Typography variant="body7" component='span'>Border Countries: </Typography>
                        <DisplayBorderCountries borderCountries={country.borderCountries}/>
                    </Box>
                
                </Grid>}

            </Grid>
    )
}