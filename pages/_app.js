import * as React from 'react';
import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { BorderContextProvider } from '../src/context/CountryBorderContext';
import {getDesignTokens} from '../src/Theme';

//  mui
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import {ColorModeContextProvider } from '../src/context/ThemeContext';

// Client-side cache shared for the whole session
// of the user in the browser.

export default function MyApp(props) {
	const { Component,  pageProps } = props;
	const [mode, setMode] = React.useState('light')

	const toggleColorMode = () => {
			setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
		  }

	
	  const theme = React.useMemo(
		() =>
		  createTheme(getDesignTokens(mode)),
		[mode],
	  );

	return (
		<BorderContextProvider>
				<ThemeProvider theme={theme}>
					<Head>
						<meta name="viewport"
							content="initial-scale=1, width=device-width" />
					</Head>
					<CssBaseline />
						<Navbar changeMode={toggleColorMode}/>
					<Component {...pageProps} />
				</ThemeProvider>
		</BorderContextProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
