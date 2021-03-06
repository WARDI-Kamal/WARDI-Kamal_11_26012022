import '../styles/Error.css';
import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<>
			<div className="main">
				<div className="error">
					<span className="error__text">404</span>
					<p className="error__subText">Oups! La page que vous avez demandez n&apos;existe pas.</p>
					<Link to="/" className="error__link">
						Retourner sur la page d’accueil
					</Link>
				</div>
			</div>
		</>
	);
};