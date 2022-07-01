import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
	palette: {
		background:{
			default: 'hsl(0, 0%, 98%)'
		},
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
	},
		typography: {
			fontFamily: "'Nunito Sans', 'sans-serif'",
			fontWeightRegular: 300,
			fontWeightMedium: 600,
			fontWeightBold: 800,
			h2:{
				fontSize: 24,
				fontWeight: 800
			},
			h3: {
				fontSize: 32,
				fontWeight: 800
			},
			h4: {
				fontSize: 18,
				fontWeight: 800
			}, 
			h5: {
				fontSize:14,
				fontWeight: 800
			},
			body1: {
				fontSize: 14,
			},
			body2: {
				fontSize: 16,
			}
		},

});

export default theme;
