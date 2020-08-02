import React, { useState } from "react";

import { NavigationList, NavigationItem } from "../types/navigation";

const Navigation: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Home");

  const handleClick = (name: string) => {
    setSelectedTab(name);
  };
  const navigationList: NavigationList = [
    {
      name: "Home",
      image: null,
    },
    {
      name: "Cholesterol",
      image: null,
    },
    {
      name: "Glucose",
      image: null,
    },
  ];

  return (
    <div className="navigation">
      {navigationList.map((i: NavigationItem) => (
        <div
          className={`navigation__item  ${
            selectedTab === i.name
              ? "navigation__item--active"
              : "navigation__item--inactive"
          }`}
          onClick={() => handleClick(i.name)}
        >
          <div
            className={`navigation__item__text ${
              selectedTab === i.name ? "navigation__item__text--active" : ""
            }`}
          >
            {i.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
