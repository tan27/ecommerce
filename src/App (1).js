import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList/ProductList';
import { CartProvider } from 'react-use-cart';
import Cart from './components/Cart/Cart';
import CartMenu from './components/Cart/CartMenu';
import Nav from './components/Nav/Nav';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const [searchField, setSearchField] = useState('');
	const [route, setRoute] = useState('signin');
	const [isSignedIn, setSignIn] = useState(false);
	const [user, setUser] = useState({
		id: '',
		name: '',
		email: '',
		joined: '',
	});

	const initialState = () => {
		setError(null);
		setIsLoaded(false);
		setItems([]);
		setSearchField('');
		setRoute('signin');
		setUser({
			id: '',
			name: '',
			email: '',
			joined: '',
		});
	};

	const loadUser = (data) => {
		setUser({
			_id: data._id,
			name: data.name,
			email: data.email,
			joined: data.joined,
		});
	};

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then(
				(items) => {
					setIsLoaded(true);
					setItems(items);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	const onRouteChange = (route) => {
		if (route === 'signout') {
			setRoute('signin');
		} else if (route === 'home') {
			setSignIn(true);
		}
		setRoute(route);
	};

	const searchChange = (e) => {
		setSearchField(e.target.value);
	};

	const itemsFilter = items.filter((item) => {
		return item.title.toLowerCase().includes(searchField.toLowerCase());
	});

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				{route === 'home' ? (
					<div>
						<CartProvider>
							<Nav
								onRouteChange={onRouteChange}
								searchChange={searchChange}>
								<CartMenu>
									<Cart />
								</CartMenu>
							</Nav>
							<ProductList items={itemsFilter} />
						</CartProvider>
					</div>
				) : route === 'signin' ? (
					<Signin
						user={user}
						loadUser={loadUser}
						onRouteChange={onRouteChange}
					/>
				) : (
					<Register onRouteChange={onRouteChange} />
				)}
			</div>
		);
	}
}

export default App;