import { Flex, FlexCenter } from "./GlobalStyle";
import facial from "../img/icons/facial.png";
import makeup from "../img/icons/makeup.png";
import lashlift from "../img/icons/lashlift.png";
import nails from "../img/icons/nails.png";
import waxing from "../img/icons/waxing.png";

export const ServicesSection = () => {
  return (
    <div className="half-container">
      <FlexCenter className="main-title">Υπηρεσίες</FlexCenter>
      <div className="serviceSection">
        <FlexCenter>
          <div className="card">
            <div className="card-content">
              <img src={nails}></img>
              <p>Περιποίηση Άκρων</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={makeup}></img>
              <p>Μακιγιάζ</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={lashlift} className="lash"></img>
              <p>
                Τοποθέτηση Βλεφαρίδων <br></br>Lashlift
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={waxing}></img>
              <p>Αποτρίχωση</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={facial}></img>
              <p>Περιποίηση Προσώπου</p>
            </div>
          </div>
        </FlexCenter>
      </div>
    </div>
  );
};
