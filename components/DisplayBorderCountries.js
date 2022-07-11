import { Box } from "@mui/system";

export default function DisplayBorderCountries({borderCountries}) {
    return (
    borderCountries.map(country => (
        <Box key={country} sx={{fontSize: '12px', padding: '6px 23px', backgroundColor: 'hsl(0, 0%, 100%)', display: 'inline-block', boxShadow: '0px 0px 2.5px 1px #d0d0d0', margin: '5px'}}>{country}</Box>
    ))
    )
}
