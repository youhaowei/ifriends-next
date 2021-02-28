import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FORMATS } from "../lib/common/format";

import MainLayout from "../layout/main";
import { ACTIONS } from "../components/Action";
import Banner from "../components/Banner";
import TextBlock from "../components/TextBlock";
import EventList from "../components/Events/List";
import BoardList from "../components/BoardList";
import Header from "../components/Header";
import { getStorageMediaUrl } from "../lib/image";

export const getStaticProps = async () => {
	return {
		props: {
			banner: {
				message: "LEARN ABOUT EACH OTHER'S CULTURE",
				image: getStorageMediaUrl('about-banner.jpg')
			},
			sections: [
				[
					{
						title: "Our History",
						textAlign: "justify",
						content: `
International Friends was founded in 1952 by George Lee Garner Harvill, wife of University of Arizona President Richard A. Harvill, and a group of women from Tucson.  At the time, there were just 63 international students at the University. The fledgling group was first called Families for International Friendship. The organization grew slowly through the years, relying on small donations from a variety of local individuals and organizations.

International Friends became an Arizona corporation in 2004 and also received official 501(c)(3) tax-exempt status from the IRS. This, along with the support and encouragement of international students, community hosts, and board members, provides a solid foundation for the future.`
					},
					{
						title: "International Friends Board",
						textAlign: "justify",
						content: `
The all-volunteer board is composed of past and present hosts, international students, and an ex-officio representative from the UA International Student Services office. Board meetings are held five times a year to evaluate the program and plan events. 
`,
						actions: [
							{
								type: ACTIONS.READMORE,
								href: "/by-laws",
								label: "By Laws"
							},
							{
								type: ACTIONS.READMORE,
								href: "/letter",
								label: "Letter from Co-Chairs"
							}
						]
					}
				]
			],
			eventColumns: [
				{
					name: "date",
					label: "Date",
					format: FORMATS.DATE
				},
				{
					name: "startDatetime",
					label: "Start Time",
					format: FORMATS.TIME
				},
				{
					name: "endDatetime",
					label: "End Time",
					format: FORMATS.TIME
				},
				{
					name: "name",
					label: "Event"
				},
				{
					name: "location",
					label: "Location"
				}
			],
			events: [
				{
					key: "board-meeting-jun",
					name: "Board Meeting",
					startDatetime: "2019-06-27 17:30",
					date: "2019-06-27",
					location: "ISS Office"
				},
				{
					name: "Welcome Luncheon",
					date: "2019-08-24",
					startDatetime: "2019-08-24 10:00",
					endDatetime: "2019-08-24 14:00",
					location: "First United Methodist Church"
				},
				{
					name: "New Host Orientation",
					date: "2019-09-14",
					location: "Tucson Visitor's Center"
				},
				{
					key: "board-meeting-sep",
					name: "Board Meeting",
					startDatetime: "2019-09-16 17:30",
					date: "2019-09-16",
					location: "ISS Office"
				},
				{
					key: "fall-picnic",
					name: "Fall Picnic",
					startDatetime: "2019-09-29 12:00",
					date: "2019-09-29",
					location: "Reid Park"
				},
				{
					name: "Biosphere Tour",
					date: "2019-10-20",
					startDatetime: "2019-10-20 13:45",
					location: "Biosphere 2"
				},
				{
					name: "Amerind Fall Festival",
					date: "2019-10-26",
					startDatetime: "2019-10-26 10:00",
					endDatetime: "2019-10-26 04:00"
				},
				{
					name: "International Students Talent Show",
					date: "2019-11-12",
					startDatetime: "2019-11-12 19:00",
					endDatetime: "2019-11-12 21:00",
					location: "Stevie Eller Dance Theater",
					url: "https://global.arizona.edu/events/global-wildcats-got-talent-8"
				},
				{
					name: "Presidio Living History Day",
					date: "2019-11-19"
				},
				{
					key: "board-meeting-dec",
					name: "Board Meeting",
					startDatetime: "2019-12-02 17:30",
					date: "2019-12-02",
					location: "ISS Office"
				},
				{
					name: "Welcome Brunch",
					date: "2020-01-12",
					location: "Tucson Visitor's Center"
				},
				{
					name: "Rodeo Picnic",
					date: "2020-02-23",
					startDatetime: "2020-02-23 12:00",
					endDatetime: "2020-02-23 14:00",
				},
				{
					name: "Annual Board Meeting",
					date: "2020-03-02",
					startDatetime: "2020-03-02 17:30",
					location: "ISS Office"
				},
				{
					name: "Desert Museum Tour",
					date: "2020-04-11",
					location: "Desert Museum"
				},
				{
					name: "Planning Meeting",
					date: "2020-04-18"
				}
			],
			boardMembers: [
				{
					firstName: "Patricia",
					lastName: "Gilman",
					title: "Co-Chair",
					profileImg: "profiles/patricia_gilman.jpg"
				},
				{
					firstName: "Randy",
					lastName: "Spalding",
					title: "Co-Chair",
					profileImg: "profiles/randy_spalding.jpeg"
				},
				{
					firstName: "Pam",
					lastName: "Obando",
					title: "Secretary",
					profileImg: "profiles/pam_obando.jpg"
				},
				{
					firstName: "Robert",
					lastName: "Woerner",
					title: "Treasurer",
					profileImg: "profiles/robert_woerner.jpeg"
				},
				{
					firstName: "Jody",
					lastName: "Friend",
					title: "Community Member",
					profileImg: "profiles/jody_friend.jpg"
				},
				{
					firstName: "Pamela",
					lastName: "Harlan",
					title: "Community Member",
					profileImg: "profiles/pamela_harlan.jpg"
				},
				{
					firstName: "Rachel",
					lastName: "Ivanyi",
					title: "Community Member",
					profileImg: "profiles/rachel_Ivanyi.jpg"
				},
				{
					firstName: "LuAnn",
					lastName: "Haley",
					title: "Community Member",
					profileImg: "profiles/luann_haley.jpg"
				},
				{
					firstName: "Michelle",
					lastName: "Morden",
					title: "Community Member",
					profileImg: "profiles/michelle_morden.jpeg"
				},
				{
					firstName: "Gaurav",
					lastName: "Deshpande",
					title: "Community Member",
					profileImg: "profiles/gaurav_deshpande.jpg"
				},
				{
					firstName: "Momoka",
					lastName: "Sugimura",
					title: "Student Representative",
					profileImg: "profiles/momoka_sugimura.jpg"
				},
				{
					firstName: "Ye",
					lastName: "Zhang",
					title: "Student Representative",
				},
				{
					firstName: "Francisco",
					lastName: " Villegas",
					title: "Student Representative",
					profileImg: "profiles/francisco_villegas.png"
				},
				{
					firstName: "Youhao",
					lastName: "Wei",
					title: "Technical Advisor",
					email: "youhaowei@ifriends.org",
					profileImg:
						"profiles/youhao_wei.jpg"
				},
				{
					firstName: "Sylvia",
					lastName: "Ahanonu",
					title: "ISS Liason",
					profileImg: "profiles/sylvia_ahanonu.jpg"
				}
			],
			previousMembers: [{
				firstName: "Siyu",
				lastName: "Wang",
				title: "Student Representative",
				profileImg: "profiles/siyu_wang.jpg"
			},]
		}
	};
};

const AboutPage = ({ banner, sections, eventColumns, events, boardMembers, previousMembers }) => {
	return (
		<MainLayout>
			<Banner {...banner} />
			<Container>
				<Row>
					<Col md={6}>
						<TextBlock {...sections[0][0]} />
					</Col>
					<Col md={6}>
						<TextBlock {...sections[0][1]} />
					</Col>
				</Row>

				{
					// caledanr can be added back after planning meeting
					// <Header title="Events" />
					//<EventList columns={eventColumns} events={events} />
				}
				<Header title="Current Board Members" />
				<BoardList members={boardMembers} />

				<Header title="Previous Members" />
				<BoardList members={previousMembers} />
			</Container>
		</MainLayout>
	);
};

export default AboutPage;
