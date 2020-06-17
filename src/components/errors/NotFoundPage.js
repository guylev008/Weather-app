import React from 'react';
import BaseErrorPage from './BaseErrorPage';

const NotFoundPage = () => {
	return (
		<BaseErrorPage>
			<h1>Oops... :(</h1>
			<div>Looks like the page you requested not exists</div>
		</BaseErrorPage>
	);
};

export default NotFoundPage;
