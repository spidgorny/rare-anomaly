import ShowConfig from './component/show-config';
import * as React from 'react';
import { Route, Switch } from 'wouter';
import FilePage from './page/FilePage';

export default function Router() {
	return (
		<Switch>
			<Route path="/" component={ShowConfig} />
			<Route path="/logFile/:filename" component={FilePage} />
			<div>404 Not Found</div>
		</Switch>
	);
}
