import React from "react";
import Container from "react-bootstrap/Container";

import ImageTextBlock, { COLORS } from "../components/ImageTextBlock";
import MainLayout from "../layout/main";
import Banner from "../components/Banner";
import TextBlock from "../components/TextBlock";


export const getStaticProps = async () => {
  return {
    revalidate: 60,
    props: {
      banner: {
        message: "Enjoy activities throughout the year",
        image: "/images/activities_header.png",
      },
      sections: [
        {
          title: "ORGANIZED ACTIVITIES FOR STUDENTS AND HOSTS",
          content:
            "While most activities shared by hosts and students are planned by them on an individual basis, International Friends currently focuses on special events, such as tours of the Tucson Museum of Art, the UA Museum of Art, and the Gem and Mineral Museum. Our traditional organization-sponsored picnics are on hold for now.",
          headerAlign: "center",
          textAlign: "justify",
        },
        [
          {
            title: "PAST FALL PICNICS",
            content:
              "International Friends previously held fall picnics for students and hosts to meet and get to know one another. These gatherings are part of our history; organization-sponsored picnics are currently on hold.",
            image: "images/10475610_354846071383228_7607311383060727136_o.jpeg",
          },
          {
            title: "NEW HOST ORIENTATIONS",
            content:
              "At the beginning of each semester, International Friends offers an orientation for new hosts to both inform and answer questions.",
            image:
              "images/81514880_1572458986263849_3369518293160296448_n.jpeg",
          },
          {
            title: "PAST RODEO PICNICS",
            content:
              "International Friends previously held Rodeo Picnics for students and hosts around the time of the historic Tucson Rodeo. Traditionally held at Reid Park, these past gatherings featured music, dancing, games, food, and fun. Organization-sponsored picnics are currently on hold.",
            image: "/images/activities_image2.png",
          },
        ],
      ],
    },
  };
};

const EventsPage = ({ banner, sections }) => (
  <MainLayout>
    <Banner {...banner} />
    <Container>
      <TextBlock {...sections[0]} />
      <ImageTextBlock {...sections[1][0]} color={COLORS.LIGHT} />
      <ImageTextBlock {...sections[1][1]} invert />
      <ImageTextBlock {...sections[1][2]} color={COLORS.LIGHT} />
    </Container>
  </MainLayout>
);

export default EventsPage;
