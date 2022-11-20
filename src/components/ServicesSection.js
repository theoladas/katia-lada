import { FlexCenter } from "./GlobalStyle";
import facial from "../img/icons/facial.svg";
import makeup from "../img/icons/makeup.svg";
import lashlift from "../img/icons/lashlift.svg";

export const ServicesSection = () => {
  return (
    <div className="half-container">
      <FlexCenter>
        <div className="card">
          <div className="card-content">
            <img src={facial}></img>
            <p>Περιποίηση Προσώπου</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content-make-up">
            <img src={makeup}></img>
            <p>Μακιγιάζ</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content-make-up">
            <img src={makeup}></img>
            <p>Μακιγιάζ</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src={lashlift}></img>
            <p>
              Τοποθέτηση Βλεφαρίδων <br></br>Lashlift
            </p>
          </div>
        </div>
      </FlexCenter>
    </div>
  );
};
