import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const TabList = styled.div`
  display: flex;
  border: none;
  width: 100%;
`;

const Tab = styled.div`
  /* padding: 0.5rem; */
  padding: 1rem;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #f49ac1;
    `}
  &:hover {
    border-top-left-radius: 10px;
    background-color: white;
  }
  font-size: 1.5rem;
  font-family: "Manrope", sans-serif;
`;

const TabContent = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-family: "Manrope", sans-serif;
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Description = styled.p`
  animation: 0.5s ${fadeIn} ease-out;
`;

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>

      {tabs.map((tab) => {
        if (tab.id === activeTab) {
          return (
            <TabContent key={tab.id}>
              <Description>{tab.description}</Description>
            </TabContent>
          );
        }
        return null;
      })}
    </TabContainer>
  );
};

export default Tabs;
