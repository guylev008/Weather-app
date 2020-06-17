import React from 'react';
import routes from '../../appRoutes';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RouteItem from './RouteItem';
import HomePage from '../home/HomePage';
import FavoritesPage from '../favorites/FavoritesPage';
import ErrorBoundary from '../errors/ErrorBoundry';
import NotFoundPage from '../errors/NotFoundPage';

const ApplicationRouter = () => {
	const history = createBrowserHistory();
	return (
		<Router history={history}>
			<ErrorBoundary>
				<Switch>
					<RouteItem exact component={HomePage} path={routes.home} />
					<RouteItem component={FavoritesPage} path={routes.favorites} />
					<Route path={routes.notFound} component={NotFoundPage} />
					<Redirect from='*' to={routes.notFound} />
				</Switch>
			</ErrorBoundary>
		</Router>
	);
};

export default ApplicationRouter;
