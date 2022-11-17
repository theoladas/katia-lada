import { Link } from "react-router-dom";
import styled from "styled-components";

export const PrimaryBtn = () => {
  return (
    <StyledPrimary>
      <Link to="/contact">Κλείστε Ραντεβού</Link>
    </StyledPrimary>
  );
};

const StyledPrimary = styled.div`
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
  padding: 2rem 0;
  padding-top: 3rem;
  a {
    text-decoration: none;
    letter-spacing: 1px;
    color: #e4389b;
    padding: 10px 12px;
    color: #fff;
    /* background: #e4389b; */
    background: #f49ac1;
    /* border: 1px solid #e4389b; */
    border: 1px solid #f49ac1;
    border-radius: 10px;
    transition: all 0.4s ease;
    &:hover,
    &:focus {
      color: #282828;
      border: 1px solid #e4389b;
      background: #f0e9eb;
    }
  }
`;
