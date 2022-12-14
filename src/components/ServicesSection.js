import { Flex, FlexCenter } from "./GlobalStyle";
import "../styles/ServicesSection.scss";
import facial from "../img/icons/facial-200.png";
import makeup from "../img/icons/makeup-200.png";
import lashlift from "../img/icons/lashlift-200.png";
import nails from "../img/icons/nails-200.png";
import waxing from "../img/icons/waxing-200.png";

export const ServicesSection = () => {
  return (
    <div className="half-container">
      <FlexCenter className="main-title">Υπηρεσίες</FlexCenter>
      <div className="serviceSection">
        <FlexCenter>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={nails}></img>
              </div>
              <div>
                <p>Περιποίηση Άκρων</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={makeup}></img>
              </div>
              <p>Μακιγιάζ</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={waxing}></img>
              </div>
              <p>Αποτρίχωση</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={facial}></img>
              <p>
                Περιποίηση <br></br>Προσώπου
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={lashlift}></img>
              </div>
              <p>
                Τοποθέτηση Βλεφαρίδων <br></br>Lashlift
              </p>
            </div>
          </div>
        </FlexCenter>
      </div>
    </div>
  );
};
