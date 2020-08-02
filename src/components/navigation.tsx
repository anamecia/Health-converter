import React from "react";

import { NavigationList, NavigationItem } from "../types/navigation";

const Navigation: React.FC = () => {
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
        <div className={`navigation__item  ${true ? 'navigation__item--active' : 'navigation__item--inactive'}`}>
          <div className="navigation__item__text">{i.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
