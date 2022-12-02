import { Flex, Paragraph, CTACall, HeroImg } from "../components/GlobalStyle";
import { PrimaryBtn } from "../components/PrimaryBtn";
import "../styles/GallerySection.scss";
import grid1 from "../img/grid-1.png";
import grid2 from "../img/grid-2.png";
import grid3 from "../img/grid-3.png";
import grid4 from "../img/grid-4.png";
import grid5 from "../img/grid-5.png";
import grid6 from "../img/grid-6.png";

export const GallerySection = () => {
  return (
    <Flex className="hero-section">
      <div className="hero-content">
        <div className="main-title">Gallery</div>
        <Paragraph>
          Επαγγελματικές Υπηρεσίες περιποίηση άκρων, μακιγιάζ, τοποθέτηση
          βλεφαρίδων lashlift, αποτρίχωσης και περιποίησης προσώπου.
        </Paragraph>
        <PrimaryBtn />
      </div>
      <div className="grid-row">
        <div className="grid-column">
          <img src={grid1}></img>
          <img src={grid6}></img>
          <img src={grid5}></img>
        </div>
        <div className="grid-column">
          <img src={grid2}></img>
          <img src={grid4}></img>

          <img src={grid6}></img>
        </div>
        <div className="grid-column">
          <img src={grid3}></img>
          <img src={grid5}></img>
          <img src={grid4}></img>
        </div>
      </div>
    </Flex>
  );
};
