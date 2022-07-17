import { useState } from "react";

import { Box } from "@mui/system";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useTheme } from "@mui/material/styles";

const Filter = ({countries, changeFilter}) => {
    const theme = useTheme()
    const [clickedOn, setClickedOn] = useState(false);

    let regions = new Set(countries.map(country => country.region))
    regions = Array.from(regions).sort();

    const handleClick = newFilter => {
        changeFilter(newFilter)
    }

    return (
        <Box>
            <Box 
            sx={{width: '60vw', maxWidth: '200px', height: '56px', 
            backgroundColor: theme.palette.primary.main, borderRadius: '5px',
            boxShadow: theme.palette.boxShadow.primary, display: 'flex', 
            justifyContent: 'space-between', alignItems:'center', padding: '18px 20px', 
            '&:hover':{cursor: 'pointer', backgroundColor: 'hoverColor.primary'}}} 
            component="span"
            onClick={() => setClickedOn(!clickedOn)}
            > 
                <Box component='span' sx={{ fontSize: '14px', 
                WebkitUserSelect: 'none', userSelect: 'none'}}>
                    Filter by Region
                </Box>

                {!clickedOn && <ArrowDropDownIcon fontSize="medium"/> }
                { clickedOn && <ArrowDropUpIcon fontSize="medium"/>}
            </Box>

            {clickedOn && <Box 
                sx={{minHeight: '144px', width: '60vw', maxWidth: '200px', 
                backgroundColor: theme.palette.primary.main, borderRadius: '5px',
                boxShadow: theme.palette.boxShadow.boxShadow,  zIndex: 5, 
                position: 'absolute', marginTop: '4px', WebkitUserSelect: 'none', userSelect: 'none'}}>

                    <Box component='ul' sx={{listStyle: 'none'}}>
                        <Box component='li' key="all" onClick={() => handleClick('all')}
                                sx={{marginBottom: '4px', fontWeight: '600', fontSize: 14, '&:hover':{fontWeight: '800', cursor: 'pointer'}}}>All</Box>
                                
                        {regions.map(region => (
                            <Box component='li' key={region} onClick={() => handleClick(region)}
                            sx={{marginBottom: '4px', fontWeight: '600', fontSize: 14, '&:hover':{fontWeight: 800, cursor: 'pointer'}}}>{region}</Box>
                        ))}

                    </Box>
            </Box>}
        </Box>
     );
    }
    
    export default Filter;
