import React, { useState } from "react";
import BodySection from "../components/bodysection/Index";
import Hero from "../components/hero";
import faqs from "../utils/faq.json";
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

const FaqContainer = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");

  return (
    <BodySection>
      <BodySection.Content>
        <BodySection.Heading>Frequently Asked Questions</BodySection.Heading>
        <BodySection.List>
          {faqs.map((faq: any) => {
            const { question, answer } = faq;
            return (
              <BodySection.ListItem key={question}>
                <BodySection.ListButton onClick={() => setToggle(!toggle)}>
                  {question}
                  {toggle ? (
                    <AiOutlinePlus style={{ fontSize: "2rem" }} />
                  ) : (
                    <AiOutlinePlus
                      style={{ fontSize: "2rem", transform: "rotate(45deg)" }}
                    />
                  )}
                </BodySection.ListButton>
                {!toggle ? (
                  <BodySection.ListContent>
                    <BodySection.Text>{answer}</BodySection.Text>
                  </BodySection.ListContent>
                ) : null}
              </BodySection.ListItem>
            );
          })}
        </BodySection.List>

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
      </BodySection.Content>
    </BodySection>
  );
};

export default FaqContainer;
