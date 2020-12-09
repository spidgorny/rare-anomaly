import ShowConfig from './component/show-config';
import * as React from 'react';
import { Route, Switch } from 'wouter';
import FilePage from './page/file-page';
import Debounce from './page/debounce';
import Debounce2 from './page/debounce2';

export default function Router() {
	return (
		<Switch>
			<Route path="/" component={ShowConfig} />
			<Route path="/logFile/:filename" component={FilePage} />
			<Route path="/debounce" component={Debounce} />
			<Route path="/debounce2" component={Debounce2} />
			<div>404 Not Found</div>
		</Switch>
	);
}
