import { Box, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useState } from "react";


const SearchField = ({updateSearchCriteria}) => {

	const [inputText, setInputText] = useState('');
	const theme = useTheme();

	const updateDebounce = debounce(text => {
		updateSearchCriteria(text)
	}, 500)

	const updateInput = eventVal => {
		setInputText(eventVal);
		updateDebounce(eventVal)
	}

	function debounce(cb, delay = 1000){
		let timeout;
		return (...args) => {
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				cb(...args)
			}, delay)
		}
	}

    return ( 
		<Box sx={{ width:'100%', maxWidth: '480px', backgroundColor: 'primary.main', 
		marginRight: [0, 2], marginBottom: ['40px', '40px', 0], padding: '19px 0 19px 24px', 
		height: '56px', display: 'flex', alignItems: 'center', borderRadius: '5px',
		boxShadow: theme.palette.boxShadow.primary}}>
			<SearchIcon fontSize="medium" sx={{marginRight: '5%', color: theme.palette.searchIcon.primary}}/>
				<Box
					component="input"
					placeholder='Search for a country...'
					sx={{ width:'100%', border: 'none', '&::placeholder':{color: 'text.secondary'}, backgroundColor: 'primary.main',
					caretColor: theme.palette.mode === 'dark' ? 'white' : 'auto', 
					fontSize: '14px', color: 'text.primary'}}
					onChange={e => updateInput(e.target.value)}
					value={inputText}
					/>
		</Box>
     );
}
 
export default SearchField;
