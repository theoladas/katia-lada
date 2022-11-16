import React from "react";
import styled from "styled-components";
import { BaseStyles } from "../components/GlobalStyle";
import "../fonts/daniel.ttf";

const Homepage = () => {
  return (
    <StyledHomepage className="homepage container">
      <div className="homepage-text">
        <h1 className="title">Σύγχρονο Κέντρο Αισθητικής</h1>

        <img
          src="https://fontmeme.com/permalink/221116/c50eb2d83ce446642df0ace149174f35.png"
          alt="daniel-font"
          border="0"
        ></img>
        <p>
          <span>Katia Lada</span>
          Επαγγελματικές Υπηρεσίες περιποίηση άκρων, μακιγιάζ, τοποθέτηση
          βλεφαρίδων lashlift, αποτρίχωσης και περιποίησης προσώπου
        </p>
        <p>
          Για ραντεβού μπορείτε να καλέσετε στο
          <a href="tel:+302374082034">2374082034</a>
          ,στις ώρες λειτουργίας μας.
        </p>
        <p>Δευ - Παρ: 10:00 - 13:00 | 15:00 - 20:00</p>
        {/* <div class="pattern-dots-md gray-light"> */}
      </div>
    </StyledHomepage>
  );
};

const StyledHomepage = styled(BaseStyles)``;

export default Homepage;
