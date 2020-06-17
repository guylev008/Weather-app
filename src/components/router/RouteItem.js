import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../layout/Layout';

const RouteItem = ({ component: Component, ...restProps }) => {
	return (
		<Route
			{...restProps}
			render={props => {
				return (
					<Layout>
						<Component {...props} />
					</Layout>
				);
			}}
		/>
	);
};

export default RouteItem;
