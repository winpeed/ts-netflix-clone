import React, { useState } from "react";
import Hero from "../components/hero";
import NavContainer from "./NavContainer";
import { MdArrowForwardIos } from "react-icons/md";

export default function HeroContainer() {
  const [email, setEmail] = useState<string>("");
  return (
    <Hero>
      <NavContainer />
      <Hero.MainHeading>Unlimited movies, TV shows, and more.</Hero.MainHeading>
      <Hero.BodyText>Watch anywhere. Cancel anytime.</Hero.BodyText>
      <Hero.BodyText>
        Ready to watch? Enter your email to create or restart your membership.
      </Hero.BodyText>
      <Hero.Form>
        <Hero.FormInput
          name="email"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <Hero.FormButton>
          Get Started{" "}
          <MdArrowForwardIos style={{ margin: "0em 0em 0em 0.7em" }} />
        </Hero.FormButton>
      </Hero.Form>
    </Hero>
  );
}
