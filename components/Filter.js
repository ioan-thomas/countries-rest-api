import { Autocomplete, createFilterOptions, TextField } from "@mui/material";

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: country => country.region,
})

const Filter = ({countries}) => {
    return ( 
        <Autocomplete 
			options={countries}
			getOptionLabel={country => country.region}
			sx={{minWidth: '53.33%', maxWidth: '200px'}}
            filterOptions={filterOptions}
			renderInput={params => <TextField  {...params} label='Filter by Region'/>}
			/>
     );
}
 
export default Filter;
