import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: 'hsl(0, 0%, 100%)',
		},
		secondary: {
			main: 'hsl(0, 0%, 98%)',
		},
		text: {
			primary: 'hsl(200, 15%, 8%)',
			secondary: 'hsl(0, 0%, 52%)'
		},
		background: {
			default: 'hsl(0, 0%, 98.0392156862745%)'
		},
		typography: {
			fontFamily: "'Nunito Sans', 'sans-serif'",
			fontWeightRegular: 300,
			fontWeightMedium: 600,
			fontWeightBold: 800,
			h4: {
				// fontFamily: "'Nunito Sans', 'sans-serif'",
				fontSize: 18,
				fontWeight: 600
			}
		},

	}
});

export default theme;
