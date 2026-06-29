import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./layout.css"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Alayout() {

	const {isLoggedIn, logout} = useContext(AuthContext);

	return (
		<>
			<aside className="aside">
				<form action="?">
					<TextField
						id="standard-field"
						label="Search"
						variant="outlined"
						focused
					/>
				</form>
			</aside>

			<nav className="nav">
				<Link to="/" className="link">
					<HomeIcon />
					Home
				</Link>

				{isLoggedIn ? (
					<Link to="/" className="link" onClick={logout}>
						<LogoutIcon />
					</Link>
				) : (
					<>
						<Link to="/Login" className="link">
							Login
						</Link>
						<Link to="/register" className="link">
							Register
						</Link>
					</>
				)}
			</nav >
		</>
	);
}
