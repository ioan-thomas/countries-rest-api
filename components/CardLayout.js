import { Grid } from "@mui/material";
import OneCard from "./Card";
import Link from "next/link";

const Cards = ({countries}) => {
    return ( 
        <Grid container spacing={5}>
            {countries.map(country => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={country.name}>
                    {/* <Link href={`/${country.name}`}> */}
                        <OneCard 
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital || 'none listed'}
                        flags={country.flags}
                        />
                    {/* </Link> */}
                </Grid>
            ))}
        </Grid>
    );
}
 
export default Cards;
