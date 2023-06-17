import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const TabContainer = styled.div`
  max-width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  border: var(--border-tab-container);
  border-radius: var(--border-radius-primary);
  box-shadow: var(--box-shadow-components);
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
  border: var(--border-tab-container);
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
      border-bottom: 2px solid var(--color-pink);
    `}
  &:hover {
    border-top-left-radius: var(--border-radius-primary);
  }
`;

const TabContent = styled.div`
  font-size: 1.2rem;
  line-height: 32px;
  width: 100%;
  padding: 1rem;
  border-bottom-left-radius: var(--border-radius-primary);
  border-bottom-right-radius: var(--border-radius-primary);
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
