import { Component } from "react";
import ReactMarkDown from "react-markdown";
import { Container } from "react-bootstrap";
import MainLayout from "../layout/main";

export default class ByLaws extends Component {
	static async getInitialProps() {
		return {
			letter: {
				header: `
## Letter from the Co-Chair
`,
				content: `Thank you for your interest in International Friends! 

International Friends has been in existence since 1952, and it is one of the oldest organizations of its type in the United States.  We are governed by a Board of Directors composed of international students and citizen representatives, and we work directly with the International Student Services office at the University of Arizona.  Your participation in our organization, either as international students or local hosts, is greatly encouraged and very much appreciated.  

Students describe International Friends as an invaluable asset for learning about American life outside of the academic environment. Hosts have equally expressed tremendous satisfaction with the rich and rewarding relationships they have developed with students that often continue for many years. The goodwill generated by these friendships frequently affects both students and hosts for the rest of their lives.

Please take the time to explore our website.  For further information or questions about International Friends, you can contact us at info@ifriendstucson.org. 

Join us! A new friend is waiting...

Sincerely,

Randy Spalding and Pat Gilman, Co-chairs, International Friends, Inc.
`
			}
		};
	}

	render() {
		const { letter: { header, content } } = this.props;
		return (
			<MainLayout>
				<Container
					style={{
						paddingTop: "10em",
						paddingBottom: "10em"
					}}>
					<ReactMarkDown source={header} className="text-center" />
					<ReactMarkDown source={content} />
				</Container>
			</MainLayout>
		);
	}
}
