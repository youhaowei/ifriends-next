import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FaBars } from "react-icons/fa";
import classNames from "classnames";
import Logo from "../logo";
import styles from "./styles.scss";
import { Signup } from "../Button";

export default () => {
	const navbar = (
		<>
			<Navbar.Brand className={styles.brand}>
				<Logo className="d-none d-sm-block" />
				<Logo className="d-block d-sm-none" size="sm" />
			</Navbar.Brand>
			<Navbar.Toggle
				aria-controls="main-navbar-nav"
				style={{
					border: "none",
					marginLeft: "auto"
				}}>
				<FaBars />
				<span
					style={{
						display: "inline-block",
						verticalAlign: "middle",
						paddingLeft: 5
					}}>
					{"Menu"}
				</span>
			</Navbar.Toggle>
			<Navbar.Collapse
				id="main-navbar-nav"
				className="flex-md-column flex-lg-row">
				<Nav className="ml-md-auto ml-lg-0 mr-lg-auto order-md-1 order-lg-0">
					<Nav.Link active>Home</Nav.Link>
					<Nav.Link>About Us</Nav.Link>
					<Nav.Link>Host a Student</Nav.Link>
					<Nav.Link>Meet Our Students</Nav.Link>
					<Nav.Link>News</Nav.Link>
				</Nav>
				<Nav className="ml-auto order-md-0 order-lg-1">
					<Signup />
				</Nav>
			</Navbar.Collapse>
		</>
	);

	return (
		<Navbar expand="md" variant="dark" bg="dark" fixed="top">
			<Container fluid className={classNames("d-lg-none")}>
				{navbar}
			</Container>
			<Container className={classNames("d-none d-lg-flex")}>
				{navbar}
			</Container>
		</Navbar>
	);
};
