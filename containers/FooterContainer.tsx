import Link from "next/link";
import React from "react";
import Footer from "../components/footer";
import footerUrl from "../utils/footer-url.json";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.List>
        <Footer.Text>
          <Link href="/">Questions? Contact us.</Link>
        </Footer.Text>
        {footerUrl.map((link: any) => {
          const { text, url } = link;
          return (
            <Footer.ListItem key={text}>
              <Link href={`${url}`}>{text}</Link>
            </Footer.ListItem>
          );
        })}

        <Footer.Text country="yes">Netflix Nigeria</Footer.Text>
      </Footer.List>
    </Footer>
  );
};

export default FooterContainer;
