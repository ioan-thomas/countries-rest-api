import { Grid } from "@mui/material";
import OneCard from "./Card";
import Link from "next/link";
import { Container } from "@mui/system";

const Cards = ({countries}) => {
    return ( 
        <Container maxWidth="xl">
        <Grid container spacing={5} >
            {countries.map(country => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={country.name}>
                        <OneCard 
                        name={country.name || 'none listed'}
                        population={country.population || 'none listed'}
                        region={country.region || 'none listed'}
                        capital={country.capital || 'none listed'}
                        flags={country.flags || 'none listed'}
                        />
                </Grid>
            ))}
        </Grid>
        </Container>
    );
}
 
export default Cards;
