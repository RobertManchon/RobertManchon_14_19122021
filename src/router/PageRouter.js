import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Nav from './../components/Nav/Nav';

const PageRouter = () => {

	return (
		<Router>
			<Nav />
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