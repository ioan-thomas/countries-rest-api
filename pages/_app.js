import * as React from 'react';
import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { BorderContextProvider } from '../src/context/CountryBorderContext';

//  mui
import theme from '../src/Theme';
import createEmotionCache from '../src/createEmotionCache';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const { Component, emotionCache =
		clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
				<Head>
					<meta name="viewport"
						content="initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider theme={theme}>
					<BorderContextProvider>
						<CssBaseline />
							<Navbar/>
						<Component {...pageProps} />
					</BorderContextProvider>
				</ThemeProvider>
			</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
