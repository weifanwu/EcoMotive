import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Button, Menu } from 'antd';

function Navbar(props) {
	const history = useNavigate();

	const redirectToProfile = () => {
	  history("/Profile");
	};

	return (
		<div>
			<nav className="nav-bar fixed-top navbar navbar-expand-sm navbar-dark">
				<div className="container-fluid">
					<NavLink to="/" className="web-logo navbar-brand">
						<img src="/imgs/newLogo.png" alt="EcoMotive" className="logo-img" />
					</NavLink>

					{/* Hamburger Menu Button */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					{/* Collapsible Menu */}
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<NavLink to="/" className="nav-link">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
							<Dropdown
								overlay={(
									<Menu>
										<Menu.Item key="search">
											<NavLink to="/Search">Search</NavLink>
										</Menu.Item>
										<Menu.Item key="quiz">
											<NavLink to="/Quiz">Quiz</NavLink>
										</Menu.Item>
										<Menu.Item key="compare">
											<NavLink to="/Compare">Compare</NavLink>
										</Menu.Item>
									</Menu>
								)}
								placement="bottomCenter"
							>
								<a className="nav-link" onClick={e => e.preventDefault()}>
									Explore <span className="caret"></span>
								</a>
							</Dropdown>
							</li>
							<li className="nav-item">
								<NavLink to="/Learning" className="nav-link">
									Learn
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/About" className="nav-link">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								{
									(!props.profile) ? 
									<span onClick={async () => {
										const backend = process.env.REACT_APP_BACKEND_HOST;
										window.open(backend + "/auth/google", "_self");
									}} className="nav-link">
										Login
									</span>
									:
									<Dropdown
									overlay={(
										<Menu>
											<Menu.Item key="logout">
												<Button style={{ marginLeft: "10px"}} onClick={async () => {
													window.open(process.env.REACT_APP_BACKEND_HOST + "/auth/logout", "_self");
												}}>Logout</Button>
											</Menu.Item>
										</Menu>
									)}
								>
									<Avatar onClick={() => {
										redirectToProfile();
									}} src={props.profile.avatar} />
								</Dropdown>
								}
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<main>
				<Outlet />
			</main>

			<footer className="footer">
				<div className="footer-logo">
					<img src="/imgs/newlogo.png" alt="Logo" />
				</div>
				<div className="footer-info">
					<span>&copy; 2024 Capstone EcoMotive</span>
				</div>
			</footer>
		</div>
	);
}

export default Navbar;
