import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const PageRouter = () => {

	return (
		<Router>

			<Switch>
				{routes.map((route, i) => (
					<Route
						key={i}
						path={route.path}
						exact={route.exact}
						component={route.component}

					/>
				))}
			</Switch>
		</Router>
	)
}
export default PageRouter;