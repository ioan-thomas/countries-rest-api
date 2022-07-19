import { Grid } from "@mui/material";
import OneCard from "./Card";
import { Container } from "@mui/system";

const Cards = ({countries, filterRegion}) =>{
    
        let filteredCountries = countries.filter(country => {
            switch (filterRegion) {
                case 'all':
                    return true;
                case 'Africa':
                case 'Americas':
                case 'Antarctic':
                case 'Asia':
                case 'Europe':
                case 'Oceania':
                    return country.region === filterRegion
                default:
                    return true
            }
        })
        
    return ( 
        <Container maxWidth="lg">

            {filteredCountries.length > 0 && <Grid container spacing={5} >
                {filteredCountries.map(country => (
                    <Grid item xs={12} sm={6} md={4} lg={3}key={country.name}>
                            <OneCard 
                            name={country.name || 'Not Available'}
                            population={country.population || 'Not Available'}
                            region={country.region || 'Not Available'}
                            capital={country.capital || 'Not Available'}
                            flags={country.flags || 'Not Available'}
                            />
                    </Grid>
                ))}
            </Grid>}
            {filteredCountries.length < 1 && <p>Sorry, there are no countries that match that criteria.</p>}
        </Container>
    );
}
 
export default Cards;
