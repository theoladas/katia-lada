import React from "react";
import styled from "styled-components";
import {
  Container,
  Title,
  Paragraph,
  CTACall,
} from "../components/GlobalStyle.js";
import { PrimaryBtn } from "../components/PrimaryBtn.js";

const Homepage = () => {
  return (
    <StyledHomepage>
      <Container>
        <Title className="title">Σύγχρονο Κέντρο Αισθητικής</Title>
        <img
          src="https://fontmeme.com/permalink/221116/51064fdbe2bec7d4de2bfdf93d4c3e88.png"
          alt="daniel-font"
          border="0"
          className="katia"
        ></img>
        {/* <img
          className="katia"
          src="https://fontmeme.com/permalink/221116/c50eb2d83ce446642df0ace149174f35.png"
          alt="Katia Lada Logo"
          border="0"
        ></img> */}
        <Paragraph>
          Επαγγελματικές Υπηρεσίες περιποίηση άκρων, μακιγιάζ, τοποθέτηση
          βλεφαρίδων lashlift, αποτρίχωσης και περιποίησης προσώπου.
        </Paragraph>
        <Paragraph>
          Για ραντεβού μπορείτε να καλέσετε στο{" "}
          <CTACall href="tel:+00302374082034">2374082034</CTACall>, στις ώρες
          λειτουργίας μας.
        </Paragraph>
        <Paragraph>Δευ - Παρ: 10:00 - 13:00 | 15:00 - 20:00</Paragraph>
        {/* <div class="pattern-dots-md gray-light"> */}
        <PrimaryBtn />
      </Container>
    </StyledHomepage>
  );
};

const StyledHomepage = styled.div`
  .katia {
    padding: 1rem 0;
  }
`;
export default Homepage;
