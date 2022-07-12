import { Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchField = ({searchInput, changeSearchInput}) => {



    return ( 
		<Box sx={{ width:'100%', maxWidth: '480px', backgroundColor: 'hsl(0, 0%, 100%)', 
		marginRight: [0, 2], marginBottom: ['40px', '40px', 0], padding: '19px 0 19px 24px', 
		height: '56px', display: 'flex', alignItems: 'center', borderRadius: '5px',
		boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.04)',}}>
			<SearchIcon fontSize="medium" sx={{marginRight: '5%', color: 'hsl(0, 0%, 70%)'}}/>
				<Box
					component="input"
					placeholder='Search for a country...'
					sx={{ width:'100%', border: 'none', '&::placeholder':{color: 'hsl(0, 0%, 50%)'}}}
					onChange={e => changeSearchInput(e.target.value)}
					value={searchInput}
					/>
		</Box>
     );
}
 
export default SearchField;

// changeSearchInput(e.target.value)
