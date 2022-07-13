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
		boxShadow: {
			boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.04)'
		},
		searchIcon: {
			primary: 'hsl(0, 0%, 70%)'
		},
		hoverColor: {
			primary: 'hsl(0, 0%, 96%)'
		},
	},
	typography: {
		fontFamily: "'Nunito Sans', 'sans-serif'",
		fontWeightRegular: 300,
		fontWeightMedium: 600,
		fontWeightBold: 800,
		h1: {
			fontSize: 64,
			fontWeight: 600
		},
		h2:{
			fontSize: 32,
			fontWeight: 800
		},
		h3: {
			fontSize: 24,
			fontWeight: 800
		},
		h4: {
			fontSize: 20,
			fontWeight: 800
		}, 
		h5: {
			fontSize:14,
			fontWeight: 800
		},
		body1: {
			fontSize: 16,
			// lineHeight: '32px'
		},
		body2: {
			fontSize: 16,
			fontWeight: 600,
			lineHeight: '32px'
		},
		body3: {
			fontSize: 18,
			lineHeight: '32px'
		},
		body4: {
			fontSize: 18,
			fontWeight: 600,
			lineHeight: '32px'
		},
		body6: {
			fontSize: 14,
			lineHeight: '32px'
		},
		body7: {
			fontSize: 14,
			fontWeight: 600,
			lineHeight: '32px'
		}
	},

});

export default theme;
