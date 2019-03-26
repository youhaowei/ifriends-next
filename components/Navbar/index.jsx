import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import Logo from "../logo";
import styles from "./styles.scss";

export default () => (
	<Navbar expand="md" variant="dark" bg="dark" fixed="top">
		<Container>
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
					<Nav.Link>Login</Nav.Link>
					<Nav.Link>Signup</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);
