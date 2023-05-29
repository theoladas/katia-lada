import React, { useState } from "react";
import { Description } from "./Tabs";
import styled from "styled-components";

const AccordionWrapper = styled.div`
  border: 1px solid #ddd;
  margin: 10px auto;
  min-width: 50vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const AccordionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 15px;
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  font-size: 1.2rem;
  line-height: 30px;
  padding: 15px;
  border-top: 1px solid #ddd;
  background-color: white;
  opacity: 0.6;
  display: ${(props) => (props.open ? "block" : "none")};
  max-width: 50vw;
`;

const Accordion = ({ data, onTabChange }) => {
  const [openTab, setOpenTab] = useState(null);

  const handleTabClick = (id) => {
    setOpenTab(openTab === id ? null : id);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  return (
    <div>
      {data.map((tab) => (
        <AccordionWrapper key={tab.id}>
          <AccordionTitle onClick={() => handleTabClick(tab.id)}>
            <div>{tab.title}</div>
            <div>{openTab === tab.id ? "-" : "+"}</div>
          </AccordionTitle>
          <AccordionContent open={openTab === tab.id}>
            <Description>{tab.description}</Description>
          </AccordionContent>
        </AccordionWrapper>
      ))}
    </div>
  );
};

export default Accordion;
