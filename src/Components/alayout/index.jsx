import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./layout.css"

export function Alayout() {
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
				<Link to="/Login" className="link">
					Login
				</Link>
				<Link to="/register" className="link">
					Register
				</Link>
			</nav>
		</>
	);
}
