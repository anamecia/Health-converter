import React, { useState } from "react";
import { Link } from "react-router-dom";

import { NavigationList, NavigationItem } from "../types/navigation";

const Navigation: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Home");

  const handleClick = (name: string) => {
    setSelectedTab(name);
  };
  const navigationList: NavigationList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Cholesterol",
      link: "/cholesterol",
    },
    {
      name: "Glucose",
      link: "/glusose",
    },
  ];

  return (
    <div className="navigation">
      {navigationList.map((i: NavigationItem, key: number) => (
        <Link to={i.link} key={key}>
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
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
