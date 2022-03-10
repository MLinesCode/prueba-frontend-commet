import { useEffect, useState } from 'react';
import CardUser from './components/carduser/CardUser';
import Header from './layout/Header';

function App() {
	const [user, setUser] = useState([]);
	useEffect(() => {
		fetch('https://dummyapi.io/data/v1/user?limit=10', {
			method: 'GET',
			headers: {
				'app-id': '6227d862779227583bf7885d',
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => setUser(data.data));
	}, []);

	return (
		<main>
			<Header />
			<div>
				{user.map(user => (
					<CardUser
						key={user.id}
						picture={user.picture}
						firstName={user.firstName}
						id={user.id}
					/>
				))}
			</div>
		</main>
	);
}

export default App;
