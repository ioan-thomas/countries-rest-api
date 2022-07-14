// Create a theme instance.
export const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...mode === 'light'
		? {
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
			boxShadow: {
				boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.04)'
			},
			searchIcon: {
				primary: '#B2B2B2'
			},
			hoverColor: {
				primary: 'hsl(0, 0%, 95%)'
			},
		}
		: {
			background:{
				default: '#1f2c36'
			},
			primary: {
				main: '#2b3844',
			},
			secondary: {
				main: '#1f2c36',
			},
			text: {
				primary: '#FFFFFF',
				secondary: '#FFFFFF'
			},
			boxShadow: {
				boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.04)'
			},
			searchIcon: {
				primary: '#FFFFFF'
			},
			hoverColor: {
				primary: 'hsl(208.8, 22.522522522522518%, 31.764705882352942%)'
			},
		}
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
	}
})
