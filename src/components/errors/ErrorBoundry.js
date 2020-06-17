import React from 'react';
import BaseErrorPage from './BaseErrorPage';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<BaseErrorPage>
					<h1>Oops :(</h1>
					<div>Looks like somthing unexpected happend...</div>
				</BaseErrorPage>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
