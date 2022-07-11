import { Grid } from "@mui/material";
import OneCard from "./Card";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";

const Cards = ({countries, filterRegion, searchTerm}) => {

    console.log(countries[1].name.toLowerCase().includes(searchTerm));
    let filteredCountries = countries;
    
    if (!searchTerm) {
        filteredCountries = (countries.filter(country => {
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
        }))
    } else if (filterRegion === 'all'){
        filteredCountries = (countries.filter(country => {
            return country.name.toLowerCase().includes(searchTerm.toLowerCase())
        }))
    }

    return ( 
        <Container maxWidth="lg">
        <Grid container spacing={5} >
            {filteredCountries.map(country => (
                <Grid item xs={12} sm={6} md={4} lg={3}key={country.name}>
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
