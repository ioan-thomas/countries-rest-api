import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import Link from "next/link";

export default function DisplayBorderCountries({borderCountries, allBorders}) {
    const theme = useTheme();
    const removeWhitespaceRegex = /\s/g
    const thisCountryBorders = borderCountries.map(country => {
       return allBorders[country]
    });

    return (
        thisCountryBorders.map(countryName => (
        
        <Link key={countryName} href={`/${countryName.toLowerCase().replace(removeWhitespaceRegex, '%20')}`}>
            <Box 
                sx={{fontSize: '12px', padding: '6px 23px', backgroundColor: 'primary.main', 
                    display: 'inline-block', boxShadow: theme.palette.boxShadow.primary, margin: '5px',
                    '&:hover':{cursor: 'pointer'}
                }}
                >{countryName}
            </Box>
        </Link>

    ))
    )
}
