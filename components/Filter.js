import { useState } from "react";

import { Box } from "@mui/system";
import { Container } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Filter = ({countries}) => {
    const [clickedOn, setClickedOn] = useState(false)

    let regions = new Set(countries.map(country => country.region))
    regions = Array.from(regions).sort();

    return (
        <Box>
        <Box 
        sx={{width: '60vw', maxWidth: '200px', height: '56px', 
        backgroundColor: 'hsl(0, 0%, 100%)', borderRadius: '5px',
        boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.04)', display: 'flex', justifyContent: 'space-between', alignItems:'center', padding: '18px 20px', '&:hover':{cursor: 'pointer'}}} 
        component="span"
        onClick={() => setClickedOn(!clickedOn)}> 
            <Box component='span' sx={{fontWeight: '600', fontSize: '14px', WebkitUserSelect: 'none', userSelect: 'none'}}>Filter by Region</Box>
            {!clickedOn && <ArrowDropDownIcon fontSize="medium"/> }
            { clickedOn && <ArrowDropUpIcon fontSize="medium"/>}
        </Box>

        {clickedOn && <Box 
            sx={{minHeight: '144px', width: '60vw', maxWidth: '200px', 
            backgroundColor: 'hsl(0, 0%, 100%)', borderRadius: '5px',
            boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.04)',  zIndex: 5, 
            position: 'absolute', marginTop: '4px', WebkitUserSelect: 'none', userSelect: 'none'}}>
                <Box component='ul' sx={{listStyle: 'none'}}>
                    {regions.map(region => (
                        <Box component='li' key={region} onClick={() => console.log(region)}
                        sx={{marginBottom: '4px', fontWeight: '600', fontSize: 14, '&:hover':{fontWeight: 800, cursor: 'pointer'}}}>{region}</Box>
                    ))}
                </Box>
            </Box>}
        </Box>
     );
    }
    
    export default Filter;
