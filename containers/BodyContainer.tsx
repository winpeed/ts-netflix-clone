import Image from "next/image";
import React from "react";
import BodySection from "../components/bodysection/Index";

const BodyContainer = () => {
  return (
    <BodySection>
      <BodySection.Content>
        <BodySection.ContentWrapper>
          <BodySection.Heading>Enjoy on your TV.</BodySection.Heading>
          <BodySection.Text>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </BodySection.Text>
        </BodySection.ContentWrapper>

        <BodySection.ContentWrapper>
          <Image
            src="/tv-image-one.png"
            alt="TV Image"
            width={550}
            height={470}
          />
        </BodySection.ContentWrapper>
      </BodySection.Content>

      <BodySection.Content reverse>
        <BodySection.ContentWrapper>
          <BodySection.Heading>
            Download your shows to watch offline.
          </BodySection.Heading>
          <BodySection.Text>
            Save your favorites easily and always have something to watch.
          </BodySection.Text>
        </BodySection.ContentWrapper>

        <BodySection.ImageWrapper>
          <Image
            src="/image-two.jpg"
            alt="Stranger Things"
            width={400}
            height={250}
          />
        </BodySection.ImageWrapper>
      </BodySection.Content>

      <BodySection.Content>
        <BodySection.ContentWrapper>
          <BodySection.Heading>Watch everywhere.</BodySection.Heading>
          <BodySection.Text>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </BodySection.Text>
        </BodySection.ContentWrapper>
      </BodySection.Content>

      <BodySection.Content reverse>
        <BodySection.ContentWrapper>
          <BodySection.Heading>Create profiles for kids.</BodySection.Heading>
          <BodySection.Text>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </BodySection.Text>
        </BodySection.ContentWrapper>

        <BodySection.ImageWrapper>
          <Image
            src="/kids-image.png"
            alt="Kids Image"
            width={400}
            height={250}
          />
        </BodySection.ImageWrapper>
      </BodySection.Content>
    </BodySection>
  );
};

export default BodyContainer;
