import { Link } from "react-router-dom";
import styled from "styled-components";

export const PrimaryBtn = () => {
  return (
    <StyledPrimary>
      <Link to="/contact">Επικοινωνήστε</Link>
    </StyledPrimary>
  );
};

const StyledPrimary = styled.div`
  a {
    text-decoration: none;
  }
`;
