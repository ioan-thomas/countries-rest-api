import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";

export default function DisplayBorderCountries({borderCountries, allBorders}) {
    const theme = useTheme();
    const thisCountryBorders = borderCountries.map(country => {
       return allBorders[country]
    });

    return (
        thisCountryBorders.map(country => (
        
        <Box key={country} sx={{fontSize: '12px', padding: '6px 23px', backgroundColor: 'primary.main', display: 'inline-block', boxShadow: theme.palette.boxShadow.primary, margin: '5px'}}>{country}</Box>

    ))
    )
}
