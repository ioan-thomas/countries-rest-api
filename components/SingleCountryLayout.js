import { Box, Grid, Typography } from "@mui/material";


export default function SingleCountryLayout({country}) {
    const nativeKey = Object.keys(country.name.nativeName)[0];
    const theCurrency = Object.keys(country.currencies)[0]
  return (
    <Grid container spacing={2}>
                <Grid item xs={12} lg={12}>
                    <Typography variant="h3">{country.name.common}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Box>
                        <Typography variant="body7" component='span'>Native Name: </Typography>
                        <Typography component='span' variant="body6">{country.name.nativeName[nativeKey].common}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span'>Population: </Typography>
                        <Typography component='span' variant="body6">{country.population.toLocaleString()}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span'>Region: </Typography>
                        <Typography component='span' variant="body6">{country.region}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span'>Sub Region: </Typography>
                        <Typography component='span' variant="body6">{country.subregion}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span'>Capital: </Typography>
                        <Typography component='span' variant="body6">{country.capital}</Typography>
                    </Box>
                </Grid>

                <Grid item>
                    <Box>
                        <Typography variant="body7" component='span'>Top Level Domain: </Typography>
                        <Typography component='span' variant="body6">{country.tld}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span'>Currency: </Typography>
                        <Typography component='span' variant="body6">{country.currencies[theCurrency].name}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body7" component='span'>Languages: </Typography>
                        <Typography component='span' variant="body6">{Object.values(country.languages).join(', ')}</Typography>
                    </Box>
                </Grid>

            </Grid>
    )
}
