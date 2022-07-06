import {TextField } from "@mui/material";

const SearchField = () => {
    return ( 
        <TextField 
			color="text"
			id="filled-search"
			label='Search for a country...'
			type="search"
			sx={{maxWidth: 480, marginTop: 3, minWidth: '100%', backgroundColor: 'hsl(0, 0%, 100%)', }}
			/>
     );
}
 
export default SearchField;
