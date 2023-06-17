import React, { useState } from "react";
import { Description } from "./Tabs";
import styled from "styled-components";

const AccordionWrapper = styled.div`
  border: var(--border-accordion-top);
  margin: 10px auto;
  min-width: 50vw;
  box-shadow: var(--box-shadow-contact-cards);
`;

const AccordionTitle = styled.div`
  font-size: var(--font-size-accordion-title);
  font-weight: bold;
  padding: 10px 15px;
  background-color: var(--color-bg-accordion);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  font-size: var(--font-size-accordion-content);
  line-height: 30px;
  padding: 15px;
  border-top: var(--border-accordion-top);
  background-color: var(--color-white);
  opacity: 0.7;
  display: ${(props) => (props.open ? "block" : "none")};
  max-width: 50vw;
  @media (max-width: 1024px) {
    max-width: 60vw;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
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
