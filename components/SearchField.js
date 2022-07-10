import {TextField } from "@mui/material";

const SearchField = () => {
    return ( 
        <TextField 
			color="text"
			id="filled-search"
			label='Search for a country...'
			type="search"
			sx={{ width:'100%', maxWidth: '480px', backgroundColor: 'hsl(0, 0%, 100%)', marginRight: [0, 2]}}
			/>
     );
}
 
export default SearchField;
