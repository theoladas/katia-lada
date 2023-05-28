import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const TabContainer = styled.div`
  max-width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid transparent;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 768px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const TabList = styled.div`
  display: flex;
  border: none;
  width: 100%;
`;

const Tab = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  border: 2px solid transparent;
  cursor: pointer;
  @media (max-width: 400px) {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
  @media (max-width: 350px) {
    font-size: 1.2rem;
    padding: 0.5rem;
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #f49ac1;
    `}
  &:hover {
    border-top-left-radius: 10px;
    /* background-color: white; */
  }
`;

const TabContent = styled.div`
  font-size: 1.2rem;
  line-height: 32px;
  width: 100%;
  padding: 1rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Description = styled.p`
  animation: 0.5s ${fadeIn} ease-out;
  white-space: pre-line;
`;

const Tabs = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Call the onTabChange function whenever a tab is clicked.
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
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
