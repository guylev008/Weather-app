import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import ApplicationRouter from './components/router/Router';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<ApplicationRouter />
		</ThemeProvider>
	);
};

export default App;
